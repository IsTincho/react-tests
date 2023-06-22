import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import TodoList from "./components/TodoList/TodoList";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />
      <TodoList />
      <Timer />
      <Counter />
      <ColorPicker />
    </div>
  );
}

export default App;
