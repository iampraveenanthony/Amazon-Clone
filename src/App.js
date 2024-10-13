import React from "react";
import "./App.css"
import AmaNav1 from './AmaNav1'
import AmaNav2 from './AmaNav2'
import AmaNav3 from './AmaNav3'
import AmaAside from './AmaAside'
import AmaCard from './AmaCard'
import AmaFooter from './AmaFooter'

const App = () => {
  return (
    <div>
        <AmaNav1/>
        <AmaNav2/>
        <AmaNav3/>
        <div className='ama-dashbord'>
            <div className='ama-aside'>
                <AmaAside/>
            </div>
            <div className='ama-card'>
                <AmaCard/>
            </div>
        </div>
        <AmaFooter/>
    </div>
  )
}

export default App