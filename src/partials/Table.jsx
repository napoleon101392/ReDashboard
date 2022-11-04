import { useState, useEffect } from "react";
import Alert from "./Alert";
import axios from "axios";

// Code: <Table get="https://jsonplaceholder.typicode.com/posts?_limit=10" />
// Todo::
// Dynamic Column header
// Dynamic response field
const Table = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(props.get);

        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [props]);

  return (
    <div className="overflow-x-auto">
      {loading && <div>A moment please...</div>}

      {error && <Alert status="error">Something went wrong - {error}</Alert>}

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Body</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((response) => (
              <tr>
                <td>{response.id}</td>
                <td>{response.body}</td>
                <td>{response.title}</td>

                <td>
                  <a href="/#" className="btn btn-ghost btn-xs text-orange-400">
                    Edit
                  </a>
                  <a href="/#" className="btn btn-ghost btn-xs text-red-400">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Body</th>
            <th>Title</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
