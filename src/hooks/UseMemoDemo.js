import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [num, setNum] = useState(0);

  const result = useMemo(() => {
    return num * 2;
  }, [num]);

  return (
    <section>
      <h3>useMemo</h3>
      <button onClick={() => setNum(num + 1)}>
        Double: {result}
      </button>
    </section>
  );
}
