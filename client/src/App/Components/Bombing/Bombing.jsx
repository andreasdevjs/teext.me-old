import React from "react";
import { Fireworks } from "@fireworks-js/react";

import Sound1 from "../../Assets/Sounds/explosion0.mp3";
import Sound2 from "../../Assets/Sounds/explosion1.mp3";
import Sound3 from "../../Assets/Sounds/explosion2.mp3";

const Bombing = () => {
  return (
    <>
      <Fireworks
        options={{
          opacity: 0.5,
          sound: {
            enabled: true,
            files: [Sound1, Sound2, Sound3],
            volume: {
              min: 2,
              max: 6,
            },
          },
          particles: 25,
          intensity: 15,
          friction: 0.5,
          gravity: 0,
          trace: 3,
          rocketsPoint: {
            min: 0,
            max: 100,
          },
          explosion: 20,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      />
    </>
  );
};

export default Bombing;
