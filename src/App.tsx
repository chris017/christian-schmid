
import './App.css'
import Hero from './components/Hero'

import {Logos} from './components/Logos'
import {Work} from './components/Work'

import Navigation from './components/Navigation';

function App() {
    return (
      <>
        <Navigation />
        <Hero />
        <Logos />
        <Work />
      </>
    );
}

export default App
