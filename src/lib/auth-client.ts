
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://bazar-3bau2t3ba-fit-check2.vercel.app",
});

export const { signIn, signUp, signOut, useSession, updateUser } = authClient;
