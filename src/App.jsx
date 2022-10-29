import Notification from './partials/Notification';
import Table from './partials/Table';

function App() {
  return (
    <div className="App">
      <Notification message="Success" status="success" />
      <Notification message="Something went wrong" status="danger" />
      <Table />
    </div>
  );
}

export default App;
