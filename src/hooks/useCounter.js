import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  return {
    count,
    inc: () => setCount(count + 1),
    dec: () => setCount(count - 1),
  };
}
