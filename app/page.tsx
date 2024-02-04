import Image from "next/image";
import Hero from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Projects />
    </div>
  );
}
