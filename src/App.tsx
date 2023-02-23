import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <>
      <Heading title="@citixenken" />
      <Section>This is Vikings Territory!!!</Section>
      <Counter />
      <List
        items={["Mercedes", "Audi", "Toyota"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
