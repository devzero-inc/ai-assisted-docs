const generateResponse = async (prompt: string) => {
  try {
    const response = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the API');
  }
}

export default generateResponse;