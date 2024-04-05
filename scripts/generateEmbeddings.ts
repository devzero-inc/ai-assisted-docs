import readMDXFilesFromDirectory from "./mdxService";
import openai from "../lib/openaiClient";
import storeEmbeddings from "./storeEmbeddings";

const generateEmbeddings = async () => {
  try {
    
    const mdxFiles = await readMDXFilesFromDirectory();

    for(const mdxFile of mdxFiles) {

      const embeddingReponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: mdxFile.content,
      });
      
      const embedding = embeddingReponse.data[0].embedding;

      await storeEmbeddings(mdxFile.content, embedding);

    }

    console.log('Embeddings generated and stored successfully.');
    
  } catch (error) {
    console.error('Error generating embeddings:', error);
  }
}

generateEmbeddings().catch(console.error);