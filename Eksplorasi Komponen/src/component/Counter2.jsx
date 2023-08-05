import { useState } from "react";

const Counter2 = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>
    </div>
  );
};

export default Counter2;
