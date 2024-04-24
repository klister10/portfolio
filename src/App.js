import './App.scss';
import Leaf from './components/Leaf';
import TitleCard from './components/TitleCard';


function App() {

  const generateLeaves = () => {
    const density = 0.001;  // Example density, adjust based on desired coverage
    const radius = Math.min(window.innerWidth, window.innerHeight) / 2.1;  // Radius of the circle in the center
    const totalArea = window.innerWidth * window.innerHeight;
    const circleArea = Math.PI * radius * radius;
    const effectiveArea = totalArea - circleArea;  // Total area minus the area of the central circle
    const numLeaves = Math.floor(density * effectiveArea);

    const leaves = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < numLeaves; i++) {
      let posX, posY, distance, angle;
      do {
        posX = Math.random() * window.innerWidth;
        posY = Math.random() * window.innerHeight;
        // Calculate the distance from the center
        distance = Math.sqrt((posX - centerX) ** 2 + (posY - centerY) ** 2);

        angle = Math.atan2(centerY - posY, centerX - posX) * 180 / Math.PI + 90; // Convert radians to degrees and adjust rotation
      } while (distance < radius); // Continue looping until a point outside the circle is found

      console.log(posX, posY, angle);
      leaves.push(Leaf({ posX, posY, angle }));
    }
    return leaves;
  }

  return (
    <div className="App">
      {generateLeaves()}
      <TitleCard />
    </div>
  );
}


export default App;
