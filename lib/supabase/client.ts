import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getRequiredEnv(
  name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY",
): string {
  const value = process.env[name];
  if (value === undefined || value.trim() === "") {
    throw new Error(
      `${name} is missing or empty. Set it in .env.local or your deployment environment.`,
    );
  }
  return value.trim();
}

const globalForSupabase = globalThis as unknown as {
  __supabaseBrowserClient?: SupabaseClient;
};

export function getSupabaseBrowserClient(): SupabaseClient {
  if (globalForSupabase.__supabaseBrowserClient) {
    return globalForSupabase.__supabaseBrowserClient;
  }
  const url = getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = getRequiredEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  const client = createClient(url, anonKey);
  globalForSupabase.__supabaseBrowserClient = client;
  return client;
}
