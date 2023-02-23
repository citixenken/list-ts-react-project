import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

const App = () => {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
};

export default App;
