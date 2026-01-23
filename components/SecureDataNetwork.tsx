"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SecureDataNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0xffffff, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles (data nodes)
    const particleCount = 80;
    const particles: THREE.Mesh[] = [];
    const particleData: Array<{
      velocity: THREE.Vector3;
      mesh: THREE.Mesh;
    }> = [];

    // Create DNA double helix with sparse spheres
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    const lineMaterialDNA = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 2
    });
    const basePairMaterial = new THREE.LineBasicMaterial({
      color: 0x222222,
      linewidth: 1.5
    });
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const helixPoints = 50;
    const helixRadius = 0.9;
    const helixHeight = 5;
    const helixTurns = 2.5;

    const strand1Points: THREE.Vector3[] = [];
    const strand2Points: THREE.Vector3[] = [];
    const spheres: THREE.Mesh[] = [];

    // Generate points for both strands
    for (let i = 0; i < helixPoints; i++) {
      const t = i / (helixPoints - 1);
      const angle = t * Math.PI * 2 * helixTurns;
      const y = (t - 0.5) * helixHeight;

      // Strand 1 points
      const point1 = new THREE.Vector3(
        Math.cos(angle) * helixRadius,
        y,
        Math.sin(angle) * helixRadius
      );
      strand1Points.push(point1);

      // Strand 2 points (opposite side)
      const point2 = new THREE.Vector3(
        Math.cos(angle + Math.PI) * helixRadius,
        y,
        Math.sin(angle + Math.PI) * helixRadius
      );
      strand2Points.push(point2);

      // Add small spheres at every 5th point
      if (i % 5 === 0) {
        const sphere1 = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          sphereMaterial
        );
        sphere1.position.copy(point1);
        dnaGroup.add(sphere1);
        spheres.push(sphere1);

        const sphere2 = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          sphereMaterial
        );
        sphere2.position.copy(point2);
        dnaGroup.add(sphere2);
        spheres.push(sphere2);
      }

      // Base pairs (connecting lines) - every 3rd point
      if (i % 3 === 0) {
        const basePairGeometry = new THREE.BufferGeometry().setFromPoints([
          strand1Points[i],
          strand2Points[i],
        ]);
        const basePairLine = new THREE.Line(basePairGeometry, basePairMaterial);
        dnaGroup.add(basePairLine);
      }
    }

    // Create strands as continuous lines
    const strand1Geometry = new THREE.BufferGeometry().setFromPoints(strand1Points);
    const strand1Line = new THREE.Line(strand1Geometry, lineMaterialDNA);
    dnaGroup.add(strand1Line);

    const strand2Geometry = new THREE.BufferGeometry().setFromPoints(strand2Points);
    const strand2Line = new THREE.Line(strand2Geometry, lineMaterialDNA);
    dnaGroup.add(strand2Line);

    const particleGeometry = new THREE.SphereGeometry(0.12, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);

      // Random position in a sphere
      const radius = 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
      particle.position.z = radius * Math.cos(phi);

      scene.add(particle);
      particles.push(particle);

      particleData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        mesh: particle,
      });
    }

    // Create connections (secure network lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.15,
    });

    const lines: THREE.Line[] = [];

    function updateConnections() {
      // Remove old lines
      lines.forEach((line) => scene.remove(line));
      lines.length = 0;

      // Create new connections between nearby particles
      const maxDistance = 4.2;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = particles[i].position.distanceTo(
            particles[j].position
          );

          if (distance < maxDistance) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              particles[i].position,
              particles[j].position,
            ]);

            const line = new THREE.Line(geometry, lineMaterial);
            scene.add(line);
            lines.push(line);
          }
        }
      }
    }

    // Animation
    const clock = new THREE.Clock();
    let frameCount = 0;

    function animate() {
      frameCount++;
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Gentle rotation of entire scene
      scene.rotation.y = elapsed * 0.05;
      scene.rotation.x = Math.sin(elapsed * 0.1) * 0.1;

      // Constant rotation of the DNA helix
      dnaGroup.rotation.y = elapsed * 0.4;

      // Animate particles with boundary constraints
      particleData.forEach((data) => {
        const particle = data.mesh;
        particle.position.add(data.velocity);

        // Boundary check - keep particles in sphere
        const distanceFromCenter = particle.position.length();
        if (distanceFromCenter > 8) {
          // Reflect velocity to bounce back
          const normal = particle.position.clone().normalize();
          data.velocity.reflect(normal).multiplyScalar(0.9);
        }

        // Add subtle pulsing
        const scale = 1 + Math.sin(elapsed * 2 + particle.position.x) * 0.3;
        particle.scale.setScalar(scale);
      });

      // Update connections every 5 frames for smoother animation
      if (frameCount % 5 === 0) {
        updateConnections();
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineMaterialDNA.dispose();
      basePairMaterial.dispose();
      sphereMaterial.dispose();
      strand1Geometry.dispose();
      strand2Geometry.dispose();
      spheres.forEach((sphere) => sphere.geometry.dispose());
      lines.forEach((line) => {
        line.geometry.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: "600px" }}
    />
  );
}
