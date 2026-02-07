import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <section>
      <h3>useCallback</h3>
      <button onClick={increment}>
        Count: {count}
      </button>
    </section>
  );
}
