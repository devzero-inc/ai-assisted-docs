import { NextResponse, NextRequest } from "next/server";
import { createEmbedding, generateResponse } from "@/service/gptService";
import createContext from "@/service/createContext";
import { GptErrors } from "@/errors/gpt-errors";
import { supabaseErrors } from "@/errors/supabase-errors";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    const embedding = (await createEmbedding(prompt)) as number[];
    const context = (await createContext(embedding)) as string;
    const response = await generateResponse(prompt, context);

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    if (
      error instanceof GptErrors.APIConnectionError ||
      error instanceof GptErrors.APITimeoutError ||
      error instanceof GptErrors.InternalServerError
    ) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 503,
        }
      );
    } else if (
      error instanceof GptErrors.AuthenticationError ||
      error instanceof supabaseErrors.NotAuthenticatedError
    ) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 401,
        }
      );
    } else if (error instanceof GptErrors.BadRequestError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 400,
        }
      );
    } else if (error instanceof GptErrors.ConflictError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 409,
        }
      );
    } else if (error instanceof GptErrors.NotFoundError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 404,
        }
      );
    } else if (
      error instanceof GptErrors.PermissionDeniedError ||
      error instanceof supabaseErrors.AccessDeniedError
    ) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 403,
        }
      );
    } else if (error instanceof GptErrors.RateLimitError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 429,
        }
      );
    } else if (error instanceof GptErrors.UnprocessableEntityError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 422,
        }
      );
    } else {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
};
