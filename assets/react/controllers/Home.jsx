import React from 'react'
import Header from '../components/Header'
import Sensation from '../components/Sensation'
import Feeling from '../components/Feeling'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
const [components, setComponents] = React.useState([Sensation])

  return (
    <div>
        <Header />
        <div className="container">
            <h1>HOM PAGE</h1>
        </div>
          <div>
            {components.includes (Sensation) && <Sensation />}
            {components.includes (Feeling) && <Feeling />}
          </div>
        <div>
          <button type="button" className="btn btn-success" onClick={() => setComponents([Feeling])}>Valider</button>
        </div>


    </div>
  )
}