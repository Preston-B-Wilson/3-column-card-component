import React from 'react';

function Card(props) {
    return (
        <div className="main-container">
            <div className="content-container container-1">
                <img src={process.env.PUBLIC_URL + "/images/icon-sedans.svg"}></img>
                <h1>SEDANS</h1>
                <p>{props.description1}</p>
                <button id="button-1" className="learn-more-button">Learn More</button>
            </div>
            <div className="content-container container-2">
                <img src={process.env.PUBLIC_URL + "/images/icon-suvs.svg"}></img>
                <h1>SUVS</h1>
                <p>{props.description2}</p>
                <button id="button-2" className="learn-more-button">Learn More</button>
            </div>
            <div className="content-container container-3">
                <img src={process.env.PUBLIC_URL + "/images/icon-luxury.svg"}></img>
                <h1>LUXURY</h1>
                <p>{props.description3}</p>
                <button id="button-3" className="learn-more-button">Learn More</button>
            </div>
        </div>
    )
}

export default Card
