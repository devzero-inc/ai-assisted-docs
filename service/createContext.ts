import { supabase } from "@/lib/supabaseClient";
import { supabaseErrors } from "@/errors/supabase-errors";

const createContext = async (embedding: number[]) => {
  try {

    const { error, data: resTable } = await supabase.rpc("vector_search", {
      input_embedding: embedding,
      match_threshold: 0.7,
      match_count: 2,
    });

    if (error) {
      switch (error.code) {
        case "PGRST200":
          throw new supabaseErrors.SupabaseError("Table not found");
        case "PGRST302":
          throw new supabaseErrors.AccessDeniedError("Access Denied");
        case "PGRST301":
          throw new supabaseErrors.NotAuthenticatedError("Not Authenticated");
        default:
          throw new supabaseErrors.UnhandledError("Internal server error");
      }
    }
    
    let contextText = "";
    for (let i = 0; i < resTable.length; i++) {
      const content = resTable[i].content;
      contextText += `${content.trim()}\n---\n`;
    }
    return contextText;
    
  } catch (error) {
    console.error(error);
    throw new supabaseErrors.UnhandledError("Internal server error");
  }
};

export default createContext;
