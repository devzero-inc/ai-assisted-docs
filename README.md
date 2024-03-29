# AI Assisted Docs

![Frontend](https://github.com/devzero-inc/ai-assisted-docs/assets/93814858/83705ac8-3a4d-42d6-a95b-86f008bca8ca)

## Introduction

With the help of a customized ChatGPT, our project offers a novel way to access and engage with documentation by utilizing artificial intelligence. Through the integration of cutting-edge machine learning methodologies and database technology, we provide a dynamic and user-friendly interface for navigating and understanding complex data. The following characteristics best sum up our AI-assisted documentation system:

### 📘 Knowledge Base Development

- **Pre-built Information Repository:** Our system begins with a thorough preparation of the knowledge base. To ensure a rich and easily accessible content basis, this entails organizing and selecting documentation into `.mdx` files. This knowledge base serves as the foundation for our AI's comprehension and reaction skills.

### 🚀 Embedding Integration with pgvector for Effective Data Representation

- We optimize data storage and retrieval by integrating vector embeddings into a **Supabase** database using `text-embedding-ada-002`. This allows for the representation of complex documentation content in a form that our AI can understand, enabling quick and accurate information retrieval.

### 🔍 Vector Similarity Search

- This intuitive method of information retrieval allows our system to quickly identify the most pertinent data in response to user inquiries, ensuring users find exactly what they need efficiently and precisely.

### 💡 Adaptive AI-Driven Responses

- **Customized Communication:** At the core of our AI-assisted documentation is the integration with OpenAI's GPT-3.5, enabling the generation of personalized text completions. This dynamic interaction model not only answers queries but also provides insights, suggestions, and further reading options, all streamed directly to the user.

## Technology Stack

Our project leverages a robust technology stack, focusing on **Supabase** for database management and **Next.js** for our development framework.

### Database: Supabase

- **Supabase** is an open-source alternative to Firebase, offering a scalable PostgreSQL database with built-in authentication, real-time capabilities, and automatic APIs. It simplifies backend development, facilitating rapid project scaling.

### Framework: Next.js

- **Next.js** is a React framework enhancing web development with features like hybrid static & server rendering, TypeScript support, and smart bundling. Designed for simplicity and performance in production environments.