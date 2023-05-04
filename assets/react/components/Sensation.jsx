import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Sensation from './Api'

export function Sensation() {
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