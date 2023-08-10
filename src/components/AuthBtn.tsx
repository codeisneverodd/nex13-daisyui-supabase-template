"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import Button from "./base";

export function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button>Logout</Button>
    </form>
  );
}

export function OAuthLoginBtn({
  provider,
  children,
}: {
  provider: Provider;
} & ComponentProps<typeof Button>) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleClick = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      router.push("/login?message=Login Failed");
    }
  };

  return <Button onClick={handleClick}>{children}</Button>;
}
