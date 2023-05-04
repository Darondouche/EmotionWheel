import React from 'react'
import Header from '../components/Header'
import Sensation from '../components/Sensation'
import Feeling from '../components/Feeling'
import { Entry } from '../components/Entry'
import Banner from '../../images/banner.png';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
const [components, setComponents] = React.useState([Sensation])

  return (
    <div>
        <Header />
        <div className="container mt-24">
          <img src={Banner} className="rounded border-t border-r border-b border-l border-solid border-black" alt="banner"/>
        </div>
          <div>
            {components.includes (Sensation) && <Sensation />}
            {components.includes (Feeling) && <Feeling />}
          </div>
        <div>
          <button type="button" className="btn btn-success" onClick={() => setComponents([Feeling]) && Entry()}>Valider</button>
        </div>


    </div>
  )
}