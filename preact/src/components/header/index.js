import { h } from "preact";

export default function Header() {
  return (
    <header>
      <h2>Demo</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/view">Drop File</a>
      </nav>
    </header>
  );
}
