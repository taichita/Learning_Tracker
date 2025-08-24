import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export function createClient() {
  const cookieStore = cookies(); // Next 15: 同期APIでOK

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

  return createServerClient(url, anon, {
    cookies: {
      getAll() { return cookieStore.getAll(); },
      // Server Components からの書き込みは no-op（書込は middleware 側）
      setAll() {},
    },
  });
}
