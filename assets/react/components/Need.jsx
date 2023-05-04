import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

function Need() {
    const [needs, setNeeds] = useState([]);

    useEffect(() => {
        fetch('/need')
            .then(response => response.json())
            .then(data => setNeeds(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des besoins</h1>
            <ul>
                {needs.map(need => (
                        <li key={need.id}>{need.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Need;