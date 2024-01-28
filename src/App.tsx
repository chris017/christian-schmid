
import './App.css'
import Hero from './components/Hero'
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {Logos} from './components/Logos'
import {Work} from './components/Work'
import NavIn from './components/NavIn';
import NavOut from './components/NavOut';


function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) {
    return <>Loading...</>; // Display loading indicator while authentication is in progress
  } else if (isAuthenticated) {
    return (
      <>
        <NavIn />
        <Hero />
        <Logos />
        <Work />
      </>
    );
  } else {
    return (
      <>
        <NavOut />
        <Hero />
        <Logos />
        <Work />
      </>
    );
  }
}

export default App
