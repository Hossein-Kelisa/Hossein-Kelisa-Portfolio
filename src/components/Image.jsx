import React from 'react';
import Fades from "../Animations/Fades";
import IMG from "../assets/IMG.png";
import './Image.css';

const Image = () => {
    return (
        <div className="image-container">
        <Fades animationType="fadeZoom">
            <img className="image" src={IMG} alt="my image" />
        </Fades>
        </div>
    );
};

export default Image;