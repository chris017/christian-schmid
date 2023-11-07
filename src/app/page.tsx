'use client';
import Firms from "../components/Firms";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projets from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white" >
      <Header/>
      <Hero/>
      <Firms/>
      <Projets/>
      <Footer/>
    </div>
  )
}
