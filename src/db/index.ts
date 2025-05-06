import { drizzle } from "drizzle-orm/neon-http";
import { defineConfig } from "drizzle-kit";

export const db = drizzle(process.env.DATABASE_URL!);
export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/db/schema",
});
