import React from 'react'
import Header from '../components/Header'
import Sensation from '../components/Sensation'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container">
            <h1>HOM PAGE</h1>
        </div>
        <Sensation />
    </div>
  )
}