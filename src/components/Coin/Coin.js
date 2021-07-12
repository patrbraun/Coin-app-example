import React from 'react'
import "./Coin.css"

const Coin = ({ name, image, symbol, price, volume }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    {console.log("Image URL: " + image)}
                    <img src={image} alt="coin" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Coin
