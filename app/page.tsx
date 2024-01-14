
import Hero from "@/components/Hero"
import Header from "@/components/header"
import {Projectv2} from "@/components/projectv2"

export default function Index() {
  return (
    <div className="container px-2 md:px-6">
      <Header/>
      <Hero/>
      <Projectv2/>
    </div>
  )
}
