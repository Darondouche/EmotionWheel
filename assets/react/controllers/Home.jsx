import React from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container">
            <h1>HOME PAGE</h1>
        </div>
    </div>
  )
}