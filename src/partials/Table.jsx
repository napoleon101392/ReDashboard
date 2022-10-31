import {useState, useEffect} from 'react';
import Alert from './Alert';
import axios from 'axios';

const Table = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

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
    }, []);
        
    return (
        <div className="overflow-x-auto">
            {loading && <div>A moment please...</div>}

            {error && (
                <Alert message={`Something went wrong - ${error}`} status="error" />
            )}

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
                            <th>{response.id}</th> 
                            <td>{response.body}</td>
                            <td>{response.title}</td> 

                            <th>
                                <a href="/#" className="btn btn-ghost btn-xs text-orange-400">Edit</a>
                                <a href="/#" className="btn btn-ghost btn-xs text-red-400">Delete</a>
                            </th>
                        </tr>
                        ))
                    }
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
    )
}

export default Table