import './App.css';
import Notification from './partials/Notification';

function App() {
  return (
    <div className="App">
      <Notification message="Success" status="success" />
      <Notification message="Something went wrong" status="danger" />
    </div>
  );
}

export default App;
