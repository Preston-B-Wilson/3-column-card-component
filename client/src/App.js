import { useState, useEffect } from 'react';
import Card from './components/Card'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const SizeController = () => {
  const { height, width } = useWindowDimensions();

  if (width>970) {
    return (
      <div>
        <Card 
          description1={"\
            Choose a sedan for its \n \
            affordability and excellent \n \
            fuel economy. Ideal for \n \
            cruising in the city or on \n \
            your next road trip. \
            "}
          description2={"\
            Take an SUV for its spacious \n \
            interior, power, and \n \
            versatility. Perfect for your \n \
            next family vacation and \n \
            off-road adventures. \
            "}
          description3={"\
            Cruise in the best car brands \n \
            without the bloated prices. \n \
            Enjoy the enhanced comfort \n \
            of a luxury rental and arrive \n \
            in style. \
            "}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Card 
          description1={"\
            Choose a sedan for its \n \
            affordability and excellent fuel \n \
            economy. Ideal for cruising in \n \
            the city or on your next road \n \
            trip. \
            "}
          description2={"\
            Take an SUV for its spacious \n \
            interior, power, and versatility. \n \
            Perfect for your next family \n \
            vacation and off-road \n \
            adventures. \
            "}
          description3={"\
            Cruise in the best car brands \n \
            without the bloated prices. \n \
            Enjoy the enhanced comfort of \n \
            a luxury rental and arrive in \n \
            style. \
            "}
        />
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
      <div className="root-wrapper">
        <SizeController/>
      </div>
    </div>
  );
}

export default App;
