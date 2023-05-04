import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

export function Sensation() {
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

export function Feeling() {
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

export function Emotion() {
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

export function Need() {
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