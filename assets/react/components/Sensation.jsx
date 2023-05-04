import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { FetchSensation } from './Api'

export default function Sensation() {
    const data = FetchSensation();
    
    return (
        <div>
            <h1>Liste des sensations</h1>
            <ul style ={{listStyleType : "none"}}>
                {data.map(sensation => (
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={sensation.id_feeling.id}/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        <li key={sensation.id}>{sensation.content}</li>
                    </label>
                  </div>
                ))}
            </ul>
        </div>
    );
}

