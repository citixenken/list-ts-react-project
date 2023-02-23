import { useState, useEffect, useCallback, useMemo, useRef } from "react";

interface User {
  id: number;
  username: string;
}
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  // useRef
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("Current value", inputRef?.current);
  console.log("Current value", inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => console.log("unmounting");
  }, [users]);

  // useCallback => memoize a function
  const addThree = useCallback(() => {
    setCount((prev) => prev + 3);
  }, []);

  // useMemo => memoize a value
  type fibFn = (n: number) => number;

  const fib: fibFn = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };

  const myNum: number = 12;

  const fibResult = useMemo(() => fib(myNum), [myNum]);

  return (
    <>
      <input type="text" ref={inputRef} />
      <p>Count is {count}</p>
      <button onClick={addThree}>+</button>
      <p>{fibResult}</p>
    </>
  );
}

export default App;
