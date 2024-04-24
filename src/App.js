import './App.scss';

const leafSizes = {
  SMALL: "smallSize",
  MEDIUM: "mediumSize",
  LARGE: "largeSize",
}

const leafColors = {
  LIGHT: "lightColor",
  MEDIUM: "mediumColor",
  DARK: "darkColor",
}


function Leaf({posX, posY, angle}) {
  const style = {
    position: 'absolute',
    left: `${posX}px`,
    top: `${posY}px`,
    '--angle': `${angle}`,  // Include the --angle property with its value in degrees
  };

  function getRandomSize() {
    const sizes = Object.values(leafSizes);  // Array of size values
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  function getRandomColor() {
    const colors = Object.values(leafColors);  // Array of color values
    return colors[Math.floor(Math.random() * colors.length)];
  }

  let leafSize = getRandomSize();
  let leafColor = getRandomColor();

  let leafClass = `leaf ${leafSize} ${leafColor}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className={leafClass} style={style}>
        <path d="M5,1 Q2,5 5,9 Q8,5 5,1" className="leaf-path"/>
    </svg>
  );
}

function App() {

  const generateLeaves = () => {
    const density = 0.001;  // Example density, adjust based on desired coverage
    const radius = Math.min(window.innerWidth, window.innerHeight) / 2.25;  // Radius of the circle in the center
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

      {/*<svg className="leaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
          <path d="M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M50,95C24.5,95,5,75.5,5,50 C5,24.5,24.5,5,50,5s45,19.5,45,45C95,75.5,75.5,95,50,95z" fill="#8BC34A" />
        </g>
      </svg>*/}
      Hello World
    </div>
  );
}


export default App;
