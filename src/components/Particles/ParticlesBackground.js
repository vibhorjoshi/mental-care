import React from 'react'
import { Particles } from 'react-tsparticles'
import particlesConfig from './particles-config'
import { loadFull } from "tsparticles";
import { useCallback } from "react";
const ParticlesBackground = ({ density = 10 }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {

  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 1.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 50,
            enable: true,
            opacity: 0.85,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: density,
          },
          opacity: {
            value: 0.65,
          },
          shape: {
            type: ["triangle", "star", "circle"],
          },
          size: {
            value: { min: 3, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground