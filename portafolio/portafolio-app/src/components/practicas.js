import React from 'react';
import './styles.css'; // Asegúrate de tener este archivo de estilos.

// Aquí se define el arreglo con los datos de las tarjetas
const cardData = [
    {
      title: "Card 1",
      description: "Descripción de la primera tarjeta. Contiene un enlace interesante.",
      imgSrc: "https://via.placeholder.com/300",
      link: "https://www.example1.com"
    },
    {
      title: "Card 2",
      description: "Descripción de la segunda tarjeta. También tiene un enlace para ti.",
      imgSrc: "https://via.placeholder.com/300",
      link: "https://www.example2.com"
    },
    {
      title: "Card 3",
      description: "Esta es la tercera tarjeta, y tiene otro enlace.",
      imgSrc: "https://via.placeholder.com/300",
      link: "https://www.example3.com"
    }
];

// Componente de React para renderizar las tarjetas
export default function Practicas() {
    return (
        <div className="menu">
            <p>containers</p>
            <p>Holi</p>

            <div className="card-container">
                {cardData.map((data, index) => (
                    <div className="card" key={index}>
                        <img src={data.imgSrc} alt={`Imagen de ${data.title}`} className="card-img" />
                        <div className="card-content">
                            <h2 className="card-title">{data.title}</h2>
                            <p className="card-description">{data.description}</p>
                            <button
                                className="card-button"
                                onClick={() => window.open(data.link, '_blank')}
                            >
                                Visitar Enlace
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
