import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import About1 from "@/components/About/About1";
import Skills from "@/components/Skills/Skills";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Work from "@/components/Work/Work";
import Collaboration from "@/components/Collaboration/Collaboration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { displayFancyLogs } from "utils/log";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();

    window.history.scrollRestoration = "manual";
    setClientHeight(window.innerHeight);

    // The original check was `typeof window.orientation === "undefined"`, but
    // that property was removed from Chrome/Android in 2021 — every modern
    // phone reported itself as a desktop and got the pinned horizontal scroll
    // and custom cursor. Gate on a real pointer and viewport instead.
    // Listening to the query (not `resize`) means mobile address-bar show/hide
    // doesn't churn state.
    const query = window.matchMedia(
      "(min-width: 1024px) and (min-height: 700px) and (hover: hover) and (pointer: fine)"
    );
    const syncIsDesktop = (e) => setIsDesktop(e.matches);
    setIsDesktop(query.matches);
    query.addEventListener("change", syncIsDesktop);

    return () => {
      clearTimeout(timer);
      query.removeEventListener("change", syncIsDesktop);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Menu />
          </Header>
          <ProgressIndicator />
          <Cursor isDesktop={isDesktop} />
          <main className="flex flex-col">
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
            >
              DEV
            </div>
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />
            <Hero />
            <About1 clientHeight={clientHeight} />
            <Skills />
            <About2 clientHeight={clientHeight} />
            <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
            <Work isDesktop={isDesktop} />
            <Collaboration clientHeight={clientHeight} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
