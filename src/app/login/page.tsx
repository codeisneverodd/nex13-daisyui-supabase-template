import { OAuthLoginBtn } from "@/components/AuthBtn";
import Messages from "./messages";

export default async function Login() {
  return (
    <>
      <OAuthLoginBtn provider="github">Github Login</OAuthLoginBtn>
      <Messages />
    </>
  );
}
