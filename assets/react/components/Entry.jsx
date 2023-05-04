import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { FetchSensation } from './Api'

export function Entry() {
    const [entry, setEntry] = useState([]);

    const checkSensation = () => {
        console.log("coucou");
        setEntry([...entry, "sensation"])
        // récup ce qui a été cliqué
        // push dans tableau useState
        // 
    }
    checkSensation()

    return (
        <div>
            {entry}
        </div>
    );
}

