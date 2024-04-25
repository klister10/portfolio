import './App.scss';
import Leaf from './components/Leaf';
import TitleCard from './components/TitleCard';
import DemoCard from './components/DemoCard';
import Carousel from './components/Carousel';
import React, { useEffect, useState } from 'react';
//import { portfolioItems } from './data/portfolioItems';

const portfolioItems = [
  {
    title: "Amira Learning",
    videoURL: "/assets/amira_demo.mov",
    linkURL: "https://www.amiralearning.com/",
    description: "An AI based Reading Tutor. I worked with this ed-tech startup as Front-End Tech Lead.",
  },
  {
    title: "Wander Match",
    videoURL: "/assets/wander_match_demo.mp4",
    description: "A flight destination discovery app using the skyscanner and google places apis.",
  },
  {
    title: "Tax Calculator",
    videoURL: "/assets/tax_calculator_demo.mov",
    description: "A tool to determine tax withholding for people with variable income.",
    linkURL: "https://master.d2fk9tf53c80qb.amplifyapp.com/",
  },
  {
    title: "TripAdvisor",
    imgURL: "/assets/TA_screen_shot.png",
    linkURL: "https://www.tripadvisor.com/CheapFlightsHome",
    description: "I owned the flights mobile web which was written in ReactJS.",
  },
  {
    title: "Behind the Scenes",
    imgURL: "/assets/github_logo.png",
    linkURL: "https://github.com/klister10",
    description: "Visit my GitHub.",
  },
  {
    title: "Let's Connect",
    imgURL: "/assets/linkedin_logo.png",
    linkURL: "https://www.linkedin.com/in/kathleen-lister-perlman/",
    description: "Connect with me on LinkedIn.",
  },
];


function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {

    setLeafShiftOnMouseMove();

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setLeafShiftOnMouseMove();
  }, [windowSize]);



  const setLeafShiftOnMouseMove = () => {
    const leaves = document.querySelectorAll('.leaf');
    document.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      leaves.forEach(leaf => {
        const leafRect = leaf.getBoundingClientRect();
        const leafX = leafRect.left + leafRect.width / 2;
        const leafY = leafRect.top + leafRect.height / 2;
        const distance = Math.sqrt(Math.pow(leafX - mouseX, 2) + Math.pow(leafY - mouseY, 2));
  
        if (distance < 100) { // Adjust this value based on how sensitive you want it to be
          //const angle = Math.atan2(leafY - mouseY, leafX - mouseX) * 180 / Math.PI;
          leaf.style.setProperty('--hover-shift', `10deg`);
        } else {
          leaf.style.setProperty('--hover-shift', `0deg`);
        }
      });
    });
  }

  const generateLeaves = () => {
    const density = 0.001; // adjust based on desired coverage
    const minLeafWidth = .1;
    const maxLeafWidth = .2;
    let radiusX, radiusY;
    if(windowSize.width <= windowSize.height) {
      radiusX = windowSize.width / (2 + minLeafWidth); // Radius along the x-axis
      radiusY = windowSize.height / (2 + maxLeafWidth); // Radius along the y-axis
    } else {
      radiusX = windowSize.width / (2 + maxLeafWidth); // Radius along the x-axis
      radiusY = windowSize.height / (2 + minLeafWidth); // Radius along the y-axis
    }
    const totalArea = windowSize.width * windowSize.height;
    const ellipseArea = Math.PI * radiusX * radiusY; // Area of the ellipse
    const effectiveArea = totalArea - ellipseArea; // Total area minus the area of the central ellipse
    const numLeaves = Math.floor(density * effectiveArea);

    const leaves = [];
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;

    for (let i = 0; i < numLeaves; i++) {
        let posX, posY, distance;
        do {
            posX = Math.random() * windowSize.width;
            posY = Math.random() * windowSize.height;
            // Calculate the normalized distance from the center to determine if inside the ellipse
            distance = Math.sqrt(
                ((posX - centerX) ** 2) / (radiusX ** 2) +
                ((posY - centerY) ** 2) / (radiusY ** 2)
            );
        } while (distance < 1); // Continue looping until a point outside the ellipse is found

        const angle = Math.atan2(centerY - posY, centerX - posX) * 180 / Math.PI + 90; // Convert radians to degrees and adjust rotation
        leaves.push(Leaf({ posX, posY, angle }));
    }
    return leaves;
  };

  const getCarouselContent = () => {
    let content = [];

    //add title card;
    content.push(<TitleCard />);

    //add portfolio items;
    for (let i = 0; i < portfolioItems.length; i++) {
      const item = portfolioItems[i];
      content.push(<DemoCard title={item.title} videoURL={item.videoURL} imgURL={item.imgURL} linkURL={item.linkURL} description={item.description} />);
    }

    return content;
  }


  return (
    <div className="App">
      {generateLeaves()}
      <Carousel>
        {getCarouselContent()}
      </Carousel>
    </div>
  );
}

export default App;

