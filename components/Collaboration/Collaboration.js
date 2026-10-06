import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Collaboration = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const st1 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    return () => {
      timeline.kill();
      st1.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label="Collaboration" className="collaboration w-full relative select-none my-16 md:my-24">
      <div className="section-container flex flex-col py-12 md:py-20">
        <ul className="collaboration-topics" aria-label="Engineering expertise">
          {["Software Engineering", "Problem Solving", "Software Architecture"].map(topic => <li key={topic}>{topic}</li>)}
        </ul>

        <h2
          ref={quoteRef}
          className="collaboration-heading my-8 md:my-12 font-medium text-center"
        >
          Interested in{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Collaboration
          </span>
          ?
        </h2>

        <ul className="collaboration-topics" aria-label="Development expertise">
          {["Agile Development", "Frontend Development", "React Native Development"].map(topic => <li key={topic}>{topic}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default Collaboration;
