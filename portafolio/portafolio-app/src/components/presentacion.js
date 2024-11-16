import React from "react";
import './styles.css';

export default function Presentacion() {
    return (
        <div className="container">
            
            <div className="personalInfo">
                <div className="info texto">
                    <div className="subInfo">
                        <h3>Bienvenido a mi portafolio</h3>
                        <h4>Janice Garcia</h4>
                    </div>
                </div>
                <div className="info imagen">
                    <img src="http://ximg.es/400x400/000/fff" alt="Imagen de presentación" />
                </div>
            </div>
        </div>
    );
}
