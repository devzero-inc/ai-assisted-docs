import fs from 'fs/promises';
import path from 'path';

const  readMDXFilesFromDirectory = async () => {
  try {
    const mdxDirectory = path.join(process.cwd(), 'public', 'docs');
    const filenames = await fs.readdir(mdxDirectory);
    const mdxFiles = [];

    for (const filename of filenames) {
      const filePath = path.join(mdxDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      mdxFiles.push({ filename, content });
    }
    
    return mdxFiles;
  } catch (error) {
    console.error('Error reading MDX files:', error);
    return [];
  }
}

export default readMDXFilesFromDirectory;