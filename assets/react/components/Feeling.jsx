import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

function Feeling() {
    const [feelings, setFeelings] = useState([]);

    useEffect(() => {
        fetch('/feeling')
            .then(response => response.json())
            .then(data => setFeelings(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des feelings</h1>
            <ul>
                {feelings.map(feeling => (
                        <li key={feeling.id}>{feeling.category}</li>
                ))}
            </ul>
        </div>
    );
}

export default Feeling;