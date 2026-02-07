import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h3>useState</h3>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </section>
  );
}
