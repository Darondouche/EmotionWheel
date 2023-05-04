import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

function Sensation() {
    const [sensations, setSensations] = useState([]);

    useEffect(() => {
        fetch('/sensation')
            .then(response => response.json())
            .then(data => setSensations(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des sensations</h1>
            <ul>
                {sensations.map(sensation => (
                        <li key={sensation.id}>{sensation.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Sensation;