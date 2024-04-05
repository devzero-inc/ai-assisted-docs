import { supabase } from "../lib/supabaseClient";

const storeEmbeddings = async (content: string, embedding: number[]) => {
  const { data, error } = await supabase
    .from('embeddings')
    .insert([{ content, embedding }]);

  if (error) {
    console.error(error);
    return false;
  }

  return data;
};

export default storeEmbeddings;