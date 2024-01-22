import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import constants from '../Constants';
import { checkUrl } from '../util'


const Home = () => {
    const [url, setUrl] = useState("");
    const [badWebsite, setBadWebsite] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch(constants.API_URL + "/check?url=" + url)
                .then(response => response.json())
                .then(data => {
                    setBadWebsite(data["exists"]);
                    console.log(data["exists"]);
                })
                .catch(error => console.error(error));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="mt-5 px-3 py-4">
            <h2>Check bad websites</h2>
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="form-control" placeholder="URL" />
                    </div>
                    <div className="col">
                        <Button type="submit" className="btn btn-primary">Check</Button>
                        {badWebsite.toString()} 
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default Home;
