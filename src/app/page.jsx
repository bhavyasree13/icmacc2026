import Hero from "@/components/Hero/Hero";
import FlowingMenu from "@/components/FlowingMenu/FlowingMenu";
import Sponsers from "@/components/Sponsers/Sponsers";
import About from "@/components/About/About";
import Tracks from "@/components/Tracks/Tracks";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <FlowingMenu /> */}
      {/*<Sponsers />*/}
      <About />
      <Tracks />
      <Footer />
    </main>
  );
}
