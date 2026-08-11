"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Perfectly tuned camera distance and perspective for prominent fit without clipping
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Perfectly proportioned TorusKnot geometry
    const geometry = new THREE.TorusKnotGeometry(0.95, 0.28, 128, 32);
    
    // Theme aware colors
    const isDark = resolvedTheme === "dark";
    const primaryColor = isDark ? 0x38bdf8 : 0x2563eb;
    const particleColor = isDark ? 0x60a5fa : 0x3b82f6;

    const material = new THREE.MeshStandardMaterial({
      color: primaryColor,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: isDark ? 0x0284c7 : 0x1d4ed8,
      emissiveIntensity: isDark ? 0.35 : 0.15,
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // 3D Particles Field
    const particlesCount = 180;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 14;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: isDark ? 0.05 : 0.04,
      color: particleColor,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Bright Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.2 : 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(isDark ? 0x38bdf8 : 0x2563eb, isDark ? 8.0 : 4.0, 50);
    pointLight1.position.set(6, 6, 6);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(isDark ? 0x818cf8 : 0x4f46e5, isDark ? 6.0 : 3.0, 50);
    pointLight2.position.set(-6, -6, -6);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      torusKnot.rotation.x += 0.007;
      torusKnot.rotation.y += 0.009;

      torusKnot.rotation.y += targetX * 0.8;
      torusKnot.rotation.x += targetY * 0.8;

      particlesMesh.rotation.y -= 0.0015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[360px] sm:h-[400px] md:h-[440px] max-w-lg mx-auto relative pointer-events-auto cursor-grab active:cursor-grabbing flex items-center justify-center"
    />
  );
}
