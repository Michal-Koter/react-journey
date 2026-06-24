import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
        <p><Link href='/meals'>Go to Meals</Link></p>
        <p><Link href='/meals/share'>Go to Share Meals</Link></p>
        <p><Link href='/meals/X'>Go to X Meals</Link></p>
        <p><Link href='/community'>Go to Meals</Link></p>
    </main>
  );
}
