// sanityClient.ts
import { createClient } from '@sanity/client';

export const client =  createClient({
  projectId: "uz45tuai", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: true,                // Disable CDN for real-time updates
  token: "sk5DUavMshAw6bRcA5kRJjl4dlQoBH2bzP2fK5QxZC0uLqAe4uCt8acTkmP24Yfr5hPmEjtsNaBpEhw4peGCYm26GOzbXYKTLr4f5YmjxHQWP3vG3WA7OXXdVo0W2uC6MofwXAPcQD7e8uMFFwU6trhSqpW3cwMmvrxI8QmLDDjetWnTAu3A"
});




