export const dynamic = "force-dynamic";

import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user ?? null;

  if (!user) redirect("/login");

  return (
    <html lang="ja">
      <body>
        <header className="p-4 border-b">Hello, {user.email}</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
