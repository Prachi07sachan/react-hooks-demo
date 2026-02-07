import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <section>
      <h3>useEffect</h3>
      <button onClick={() => setCount(count + 1)}>
        Change Title: {count}
      </button>
    </section>
  );
}
