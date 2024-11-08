import Image from "next/image";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
export default function Page() {
  return (
    <div className="slides">
      <Home />
      <About />
    </div>
  );
}
