import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
   appName: "",
   database: prismaAdapter(prisma, { provider: "postgresql" }),
   experimental: { joins: true },
   advanced: {
      database: { generateId: false },
   },
   session: {
      expiresIn: 60 * 60 * 24 * 30, // 30 days
      updateAge: 60 * 60 * 24, // Refresh every 24 hours
      cookieCache: {
         enabled: process.env.NODE_ENV === "production",
         maxAge: 10 * 60, // 10 minutes
         strategy: "jwe",
      },
   },
   account: {
      accountLinking: {
         allowDifferentEmails: true,
      },
   },
});

export type ServerSession = typeof auth.$Infer.Session;
