import "server-only";

function requireEnv(name: string): string {
   const value = process.env[name];
   if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
   }
   return value;
}

export const env = {
   DATABASE_URL: requireEnv("DATABASE_URL"),
   BETTER_AUTH_SECRET: requireEnv("BETTER_AUTH_SECRET"),
};
