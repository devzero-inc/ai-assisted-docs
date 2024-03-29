import openai from "@/lib/openaiClient";
import OpenAI from "openai";
import { GptErrors } from "@/errors/gpt-errors";

const createEmbedding = async (prompt: string) => {
  try {
    const promptEmbedding = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: prompt,
    });
    return promptEmbedding.data[0].embedding;
  } catch (error) {
    console.error(error);
    if (error instanceof OpenAI.APIConnectionError) {
      throw new GptErrors.APIConnectionError("API Connection Error");
    } else if (error instanceof OpenAI.APIConnectionTimeoutError) {
      throw new GptErrors.APITimeoutError("API Timeout Error");
    } else if (error instanceof OpenAI.AuthenticationError) {
      throw new GptErrors.AuthenticationError("Authentication Error");
    } else if (error instanceof OpenAI.BadRequestError) {
      throw new GptErrors.BadRequestError("Bad Request Error");
    } else if (error instanceof OpenAI.ConflictError) {
      throw new GptErrors.ConflictError("Conflict Error");
    } else if (error instanceof OpenAI.InternalServerError) {
      throw new GptErrors.InternalServerError("Internal Server Error");
    } else if (error instanceof OpenAI.NotFoundError) {
      throw new GptErrors.NotFoundError("Not Found Error");
    } else if (error instanceof OpenAI.PermissionDeniedError) {
      throw new GptErrors.PermissionDeniedError("Permission Denied Error");
    } else if (error instanceof OpenAI.RateLimitError) {
      throw new GptErrors.RateLimitError("Rate Limit Error");
    } else if (error instanceof OpenAI.UnprocessableEntityError) {
      throw new GptErrors.UnprocessableEntityError(
        "Unprocessable Entity Error"
      );
    } else {
      throw new GptErrors.UnhandledError("Unhandled Error");
    }
  }
}

const generateResponse = async (prompt: string, context: string) => {
  try {
    const preparedPrompt = `You are a very enthusiastic devzero representative who loves
    to help people! Given the following sections from the Supabase
    documentation, answer the question refering that information,
    outputted in markdown format. If you are unsure and the answer
    is not explicitly written in the documentation, say
    "Sorry, I don't know how to help with that.
    
    Context sections:
    ${context}
    
    Question:
    ${prompt}`;

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: preparedPrompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    if (response.choices.length > 0) {
      return response.choices[0].message.content;
    }
  } catch (error) {
    console.error(error);
    if (error instanceof OpenAI.APIConnectionError) {
      throw new GptErrors.APIConnectionError("API Connection Error");
    } else if (error instanceof OpenAI.APIConnectionTimeoutError) {
      throw new GptErrors.APITimeoutError("API Timeout Error");
    } else if (error instanceof OpenAI.AuthenticationError) {
      throw new GptErrors.AuthenticationError("Authentication Error");
    } else if (error instanceof OpenAI.BadRequestError) {
      throw new GptErrors.BadRequestError("Bad Request Error");
    } else if (error instanceof OpenAI.ConflictError) {
      throw new GptErrors.ConflictError("Conflict Error");
    } else if (error instanceof OpenAI.InternalServerError) {
      throw new GptErrors.InternalServerError("Internal Server Error");
    } else if (error instanceof OpenAI.NotFoundError) {
      throw new GptErrors.NotFoundError("Not Found Error");
    } else if (error instanceof OpenAI.PermissionDeniedError) {
      throw new GptErrors.PermissionDeniedError("Permission Denied Error");
    } else if (error instanceof OpenAI.RateLimitError) {
      throw new GptErrors.RateLimitError("Rate Limit Error");
    } else if (error instanceof OpenAI.UnprocessableEntityError) {
      throw new GptErrors.UnprocessableEntityError(
        "Unprocessable Entity Error"
      );
    } else {
      throw new GptErrors.UnhandledError("Unhandled Error");
    }
  }
}

export {
  createEmbedding,
  generateResponse
}