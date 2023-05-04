import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { FetchSensation } from './Api'

export default function Sensation() {
    const data = FetchSensation();
    
    return (
        <div>
            <h1>Liste des sensations</h1>
            <ul>
                {data.map(sensation => (
                        <li key={sensation.id}>{sensation.content}</li>
                ))}
            </ul>
        </div>
    );
}