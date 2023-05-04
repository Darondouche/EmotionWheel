import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { FetchFeeling } from './Api'

export default function Feeling() {
    const data = FetchFeeling();
    
    return (
        <div>
            <h1>Liste des feelings</h1>
            <ul style ={{listStyleType : "none"}}>
                {data.map(feeling => (
                    <li key={feeling.id}>{feeling.category}</li>
                ))}
            </ul>
        </div>
    );
}