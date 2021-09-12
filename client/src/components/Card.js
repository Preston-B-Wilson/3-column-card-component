import React from 'react';

function Card() {
    return (
        <div className="main-container">
            <div className="content-container container-1">
                <img src="./images/icon-sedans.svg"></img>
                <h1>SEDANS</h1>
                <p>{"\
                Choose a sedan for its \n \
                affordability and excellent \n \
                fuel economy. Ideal for \n \
                cruising in the city or on \n \
                your next road trip. \
                "}
                </p>
                <button id="button-1" className="learn-more-button">Learn More</button>
            </div>
            <div className="content-container container-2">
                <img src="./images/icon-suvs.svg"></img>
                <h1>SUVS</h1>
                <p>{"\
                Take an SUV for its spacious \n \
                interior, power, and \n \
                versatility, Perfect for your \n \
                next family vacation and \n \
                off-road adventures. \
                "}
                </p>
                <button id="button-2" className="learn-more-button">Learn More</button>
            </div>
            <div className="content-container container-3">
                <img src="./images/icon-luxury.svg"></img>
                <h1>LUXURY</h1>
                <p>{"\
                Cruise in the best car brands \n \
                without the bloated prices. \n \
                Enjoy the enhanced comfort \n \
                of a luxury rental and arrive \n \
                in style. \
                "}
                </p>
                <button id="button-3" className="learn-more-button">Learn More</button>
            </div>
        </div>
    )
}

export default Card
