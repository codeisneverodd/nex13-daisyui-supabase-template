import Button from "@/components/base";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js + TypeScript + Daisy UI</h1>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
