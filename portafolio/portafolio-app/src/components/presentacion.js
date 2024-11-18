import React from "react";
import './styles.css';
import Boton from "./boton";

export default function Presentacion() {
    return (
        <div className="container">
            
            <div className="personalInfo">
                <div className="info texto">
                    <div className="subInfo">
                        <h2>Bienvenido a mi portafolio</h2>
                        <h4>Janice Garcia</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum vitae velit eu commodo. Donec sed semper sapien. Vestibulum eu feugiat lorem. Sed vel nisi posuere ex semper feugiat quis nec metus. In hac habitasse platea dictumst. Donec id elit massa. Ut vitae aliquam sem, a egestas ligula. Nunc tincidunt, orci ut posuere tincidunt, ante sem porttitor est, non placerat libero lacus eu lorem. Vestibulum eget nibh hendrerit, aliquet elit nec, fermentum urna. Praesent dictum leo nunc, ut lobortis tellus molestie sit amet. </h5>
                        <Boton />
                    </div>
                </div>
                <div className="info imagen">
                    <img src="http://ximg.es/400x400/000/fff" alt="Imagen de presentación" />
                </div>
            </div>
        </div>
    );
}
