import React, { useEffect, useState, useRef } from "react";
import "../homecompo/CounterPc.css";

const useInView = (options) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

const SimpleCounter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const CounterPc = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const counters = [
    { number: 58, suffix: "k", title: "Happy People" },
    { number: 700, suffix: "+", title: "Surgery Completed" },
    { number: 40, suffix: "+", title: "Expert Doctors" },
    { number: 20, suffix: "", title: "Worldwide Branch" },
  ];

  return (
    <div className="container">
    <section className="pc-counter-section" ref={ref}>
      <div className="pc-counter-overlay">
        <div className="container pc-counter-container">
          {counters.map((item, index) => (
            <div className="pc-counter-box" key={index}>
              <h2>
                {inView ? <SimpleCounter end={item.number} /> : 0}
                {item.suffix}
              </h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default CounterPc;
