import React from 'react'
import Header from '../components/Header'
import Emotion from '../components/Emotion'
import Sensation from '../components/Sensation'
import Feeling from '../components/Feeling'
import Need from '../components/Need'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container">
            <h1>HOM PAGE</h1>
        </div>
        <Sensation />
        <Feeling />
        <Emotion />
        <Need />
    </div>
  )
}