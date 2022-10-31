import Alert from './partials/Alert';
import Table from './partials/Table';

function App() {
  return (
    <div className="App">
      <Alert message="Success" status="success" />
      <Alert message="Something went wrong" status="error" />
      <Table />
    </div>
  );
}

export default App;
