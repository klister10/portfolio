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

export default function Leaf({posX, posY, angle}) {
  const style = {
    position: 'absolute',
    left: `${posX}px`,
    top: `${posY}px`,
    '--angle': `${angle}deg`,  // Include the --angle property with its value in degrees
    '--hover-shift': `0deg`,
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
      <path d="M5,1 Q2,5 5,9 Q8,5 5,1" className="leafPath"/>
    </svg>
  );
}