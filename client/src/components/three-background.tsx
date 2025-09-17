import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.THREE || !mountRef.current) return;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 200;
    const particles = new window.THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    // Define gradient colors (teal, purple, blue)
    const colorPalette = [
      new window.THREE.Color(0x14B8A6), // Teal
      new window.THREE.Color(0x8B5CF6), // Purple
      new window.THREE.Color(0x3B82F6), // Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;

      // Random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Random velocities
      velocities.push(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );
    }

    particles.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));

    const material = new window.THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: window.THREE.AdditiveBlending,
    });

    const particleSystem = new window.THREE.Points(particles, material);
    scene.add(particleSystem);

    camera.position.z = 1000;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i * 3];
        positions[i3 + 1] += velocities[i * 3 + 1];
        positions[i3 + 2] += velocities[i * 3 + 2];

        // Boundary check - reset position if out of bounds
        if (Math.abs(positions[i3]) > 1000) {
          positions[i3] = (Math.random() - 0.5) * 2000;
          velocities[i * 3] = (Math.random() - 0.5) * 0.5;
        }
        if (Math.abs(positions[i3 + 1]) > 1000) {
          positions[i3 + 1] = (Math.random() - 0.5) * 2000;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
        }
        if (Math.abs(positions[i3 + 2]) > 500) {
          positions[i3 + 2] = (Math.random() - 0.5) * 1000;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Mouse interaction effect
      particleSystem.rotation.x += mouseY * 0.0001;
      particleSystem.rotation.y += mouseX * 0.0001;

      // Continuous slow rotation
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none" 
      style={{ zIndex: 1 }}
    />
  );
}
