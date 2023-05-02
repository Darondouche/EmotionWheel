import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

function Test() {
    const [emotions, setEmotions] = useState([]);

    useEffect(() => {
        fetch('/emotion')
            .then(response => response.json())
            .then(data => setEmotions(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des emotions</h1>
            <ul>
                {emotions.map(emotion => (
                    <li key={emotion.id}>{emotion.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test;