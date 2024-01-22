import React, { useState, useEffect } from "react";
import constants from '../Constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Admin = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const decrementPage = () => {
        setPage(page-1);
    }

    const incrementPage = () => {
        setPage(page+1);
      }

    useEffect(() => {
        console.log("page=" + page);
        fetch(constants.API_URL + "/urls?page=" + page)
        .then(response => response.json())
        .then(json => setData(json))
    }, [page]);

    return (
        <div className="mt-5 px-3 py-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Check bad websites</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.url}>
                            <td>{item.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col">
                <Button type="light" className="btn btn-primary" onClick={decrementPage}>Previous</Button>
                <Form.Control type="text" className="form-control" value={page} onChange={(e) => setPage(e.target.value)} />
                <Button type="light" className="btn btn-primary" onClick={incrementPage}>Next</Button>
            </div>
        </div>
    );
}

export default Admin;