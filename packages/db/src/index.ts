import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";




// Create the postgres client
const client = postgres(process.env.DATABASE_URL);

// Create the drizzle instance
export const db = drizzle(client, { schema });

// Re-export schema for convenience
export * from "./schema"; 
