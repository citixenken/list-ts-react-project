import Counter from "./Counter";
const App = () => {
  return (
    <div>
      <Counter>{(num: number) => <>Current count: {num}</>}</Counter>
    </div>
  );
};

export default App;
