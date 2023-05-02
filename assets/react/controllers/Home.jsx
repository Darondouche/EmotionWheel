import React from 'react'
import Header from '../components/Header'
import Test from '../components/Test'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container">
            <h1>HOM PAGE</h1>
        </div>
        <Test />
    </div>
  )
}