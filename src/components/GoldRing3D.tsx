import { useEffect, useRef, useState } from "react";

export function GoldRing3D({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.2 },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let renderer: import("three").WebGLRenderer | undefined;
    let frame = 0;
    let ro: ResizeObserver | undefined;

    void (async () => {
      const THREE = await import("three");
      if (disposed || !host) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
      camera.position.set(0, 0.35, 5.2);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      host.appendChild(renderer.domElement);

      const gold = new THREE.MeshStandardMaterial({
        color: 0xc4a46a,
        metalness: 0.92,
        roughness: 0.22,
      });
      const stone = new THREE.MeshStandardMaterial({
        color: 0xe8e4dc,
        metalness: 0.15,
        roughness: 0.12,
        emissive: 0x8a7a58,
        emissiveIntensity: 0.18,
      });

      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.18, 32, 96), gold);
      const band = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.06, 16, 80), gold);
      band.rotation.x = Math.PI / 2;
      band.scale.set(0.98, 0.98, 0.55);
      const gem = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 32), stone);
      gem.position.set(0, 1.28, 0);
      const prongGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.28, 8);
      const group = new THREE.Group();
      group.add(ring, band, gem);
      for (const a of [0.4, 1.1, 2.0, 2.7]) {
        const p = new THREE.Mesh(prongGeo, gold);
        p.position.set(Math.sin(a) * 0.22, 1.12, Math.cos(a) * 0.22);
        group.add(p);
      }
      scene.add(group);

      scene.add(new THREE.AmbientLight(0xfff6e8, 0.55));
      const key = new THREE.DirectionalLight(0xfff3d6, 1.6);
      key.position.set(3, 4, 5);
      scene.add(key);
      const rim = new THREE.PointLight(0xb89b6a, 18, 12);
      rim.position.set(-3, -1, 3);
      scene.add(rim);

      const resize = () => {
        const w = host.clientWidth;
        const h = host.clientHeight;
        if (!w || !h || !renderer) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      };
      resize();
      ro = new ResizeObserver(resize);
      ro.observe(host);

      const tick = () => {
        if (disposed) return;
        frame = requestAnimationFrame(tick);
        group.rotation.y += 0.007;
        group.rotation.x = Math.sin(performance.now() / 2400) * 0.12;
        renderer?.render(scene, camera);
      };
      tick();
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      ro?.disconnect();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, [active]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}
