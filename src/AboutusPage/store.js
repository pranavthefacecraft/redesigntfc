// Generate a random vector on the circumference of a circle
const randomVectorOnCircle = (r) => {
  const theta = Math.random() * 2 * Math.PI; // Random angle between 0 and 2π
  const x = r * Math.cos(theta); // x-coordinate on the circle
  const y = r * Math.sin(theta); // y-coordinate on the circle
  return [x, y, 0]; // z-coordinate is 0 for 2D alignment
};

// Generate random Euler angles (optional for 2D, but included for consistency)
const randomEuler = () => [0, 0, Math.random() * Math.PI]; // Only z-rotation is relevant in 2D

// Create the data array with 10 points on the circle
const data = Array.from({ length: 10 }, (_, i) => ({
  random: Math.random(),
  position: randomVectorOnCircle(2), // Radius of 10
  rotation: randomEuler(), // Optional rotation
}));

// Export the data array
export { data };