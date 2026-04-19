import "server-only";

import { auth, type ServerSession } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";
import { redirect } from "next/navigation";

export const getSession = cache(async (): Promise<ServerSession | null> => {
   return auth.api.getSession({ headers: await headers() });
});

export const getRequiredSession = cache(async (): Promise<ServerSession> => {
   const session = await getSession();
   if (!session) redirect("/");
   return session;
});
