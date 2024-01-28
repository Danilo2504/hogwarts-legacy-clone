import { useState } from "react";

function Button() {
  const [count, setCount] = useState<number>(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      click me {count}
    </button>
  );
}

export default Button;
