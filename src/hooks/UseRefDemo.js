import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();

  return (
    <section>
      <h3>useRef</h3>
      <input ref={inputRef} placeholder="Click button" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </section>
  );
}
