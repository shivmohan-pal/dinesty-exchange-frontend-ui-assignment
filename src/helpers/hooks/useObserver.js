"use client";
const { useRef, useEffect, useState } = require("react");

function useObserver(options) {
  //option should be object { root: document.querySelector("#scrollArea"), rootMargin: "0px", threshold: 1.0,}
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { ...options }
    );
    observer.observe(ref.current);
  }, []);
  return { ref, inView };
}
export default useObserver;