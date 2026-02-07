import { useCounter } from "./useCounter";

export default function CustomHookDemo() {
  const { count, inc, dec } = useCounter();

  return (
    <section>
      <h3>Custom Hook</h3>
      <button onClick={dec}>-</button>
      <span> {count} </span>
      <button onClick={inc}>+</button>
    </section>
  );
}
