import React, { useEffect, useState } from "react";

const ResponsiveContactButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={isMobile ? "tel:01214546590" : "#contact"}
      className="flex items-center font-semibold text-white no-underline btn-cta"
      onClick={handleClick}
    >
      Contact Now
    </a>
  );
};

export default ResponsiveContactButton;
