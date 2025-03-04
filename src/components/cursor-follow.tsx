import { useEffect, useState } from "react";

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState("0px 0px 15px rgba(255, 255, 255, 0.5)");

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      animationFrameId = window.requestAnimationFrame(() => {
        setPosition({ x: mouseX, y: mouseY });

        // Constrain the spread and blur based on the distance
        // const spread = Math.min(distance / 5, maxDistance); // Max spread of 300px
        const spread = 80;
        // const blur = Math.min(spread + 10, 80); // Max blur of 80px
        const blur = 150;

        // Set the box-shadow to simulate a spreading light effect
        setShadow(`0px 0px ${blur}px ${spread}px rgba(255, 255, 255, 0.6)`); // White light
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        left: `${position.x - 5}px`, // Center the light around the cursor
        top: `${position.y - 5}px`,  // Center the light around the cursor
        width: "10px", // Size of the light
        height: "10px", // Size of the light
        borderRadius: "50%", // Make it round (glowing light source)
        boxShadow: shadow, // Apply dynamic shadow (light effect)
        pointerEvents: "none", // Prevent interfering with mouse events
        transition: "all 0.1s ease-out", // Smooth transition for shadow
      }}
    />
  );
};

export default CursorFollow;
