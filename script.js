const cube = document.getElementById('cube');

if (cube) {
  let x = 80;
  let y = 80;
  let vx = 4;
  let vy = 3;
  let phase = 0;
  const baseSize = 90;
  const phaseIncrement = 0.08;
  const scaleAmplitude = 0.35;
  const rotationSpeed = 20;

  function animate() {
    phase += phaseIncrement;
    const scale = 1 + Math.sin(phase) * scaleAmplitude;
    const currentSize = baseSize * scale;
    const maxX = window.innerWidth - currentSize;
    const maxY = window.innerHeight - currentSize;

    x += vx;
    y += vy;

    if (x <= 0 || x >= maxX) {
      vx *= -1;
      x = Math.max(0, Math.min(x, maxX));
    }

    if (y <= 0 || y >= maxY) {
      vy *= -1;
      y = Math.max(0, Math.min(y, maxY));
    }

    const rotation = phase * rotationSpeed;
    cube.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
}
