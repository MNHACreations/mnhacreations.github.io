import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name'
import Project from './components/Project'

function App() {
    const [count, setCount] = useState(0)

    return (<> <div className='text-white flex flex-col justify-center h-screen'>
            <Name />


            </div>

            <div className='flex flex-col text-white'> 
                <Project title='WikiHub' description='WikiHub is a discord bot that integrates wikipedia into discord<hr> it started as a hobby project about 3 years ago and has grown larger since then, it is now a verified bot that serves ~100 servers' imageUrl='https://cdn.discordapp.com/icons/1039958861903310949/d85a1b0e3295bd1d3a6de83f9f64f487.webp?size=128'/>
            </div>
            </>)
}

export default App
