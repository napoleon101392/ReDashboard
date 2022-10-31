import Alert from './partials/Alert';
import Table from './partials/Table';

function App() {
  return (
    <div className="App">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <Alert message="Success" status="success" />
          <Alert message="Something went wrong" status="error" />
          <Table />

          <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
