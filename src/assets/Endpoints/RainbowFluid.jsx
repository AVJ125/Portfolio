import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Fluid } from "@whatisjery/react-fluid-distortion";

function RainbowFluid() {
  const fluidRef = useRef(null);
  const [hue, setHue] = useState(0);

  useFrame(() => {
    setHue((h) => (h + 1) % 360);
    if (fluidRef.current) {
      // dynamically change color
      fluidRef.current.fluidColor = `hsl(${hue}, 100%, 50%)`;
    }
  });

  return (
    <Fluid
      ref={fluidRef}
      showBackground={true}
        intensity={8.0}     // up
  gain={8.0}          // up
  dissipation={0.985} // slower fade
  resolution={512}    // higher resolution if supported
    />
  );
}

export default RainbowFluid;
