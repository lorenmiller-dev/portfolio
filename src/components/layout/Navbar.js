import React, { useEffect, useState } from "react";

const Navbar = () => {
  const sections = ["About", "Experience", "Projects"];
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.55 } // 55% visible triggers highlight
    );

    const els = document.querySelectorAll("section[id]");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-0 top-0 h-screen flex justify-center items-center z-50">
      <nav aria-label="Main navigation">
        <ul className="px-6 text-neutral-400 opacity-80 text-lg space-y-2">
          {sections.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeId === id;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setActiveId(id)} // <-- highlights instantly
                  className={`block transform transition-all duration-200 origin-left ${
                    isActive
                      ? "scale-110 text-white" // active styling
                      : "hover:scale-110 hover:text-white"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


