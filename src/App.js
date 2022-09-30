import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <div className="flex-it">
        <h1>My Todos</h1>
        <button className="btn">Add</button>
      </div>
      <div className="wrap">
        <Todo text="Learn React" />
        <Todo text="Master React" />
        <Todo text="Sleep" />
        <Todo text="Sleep" />
        <Todo text="Sleep" />
      </div>
    </div>
  );
}

export default App;
