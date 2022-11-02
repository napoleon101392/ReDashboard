import Table from './partials/Table';

function App() {
  return (
    <div className="App">
      <Table get="https://jsonplaceholder.typicode.com/posts?_limit=10" />
    </div>
  );
}

export default App;
