import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';

export function FetchSensation() {
    const [sensations, setSensations] = useState([]);

    useEffect(() => {
        fetch('/sensation')
            .then(response => response.json())
            .then(data => setSensations(data))
            .catch(error => console.error(error));
    }, []);

    return sensations
}

export function FetchFeeling() {
    const [feelings, setFeelings] = useState([]);

    useEffect(() => {
        fetch('/feeling')
            .then(response => response.json())
            .then(data => setFeelings(data))
            .catch(error => console.error(error));
    }, []);

    return feelings
}

export function FetchEmotion() {
    const [emotions, setEmotions] = useState([]);

    useEffect(() => {
        fetch('/emotion')
            .then(response => response.json())
            .then(data => setEmotions(data))
            .catch(error => console.error(error));
    }, []);

    return emotions
}

export function FetchNeed() {
    const [needs, setNeeds] = useState([]);

    useEffect(() => {
        fetch('/need')
            .then(response => response.json())
            .then(data => setNeeds(data))
            .catch(error => console.error(error));
    }, []);

    return needs
}