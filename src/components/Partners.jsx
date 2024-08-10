import React from 'react';
import '../styles/Partners.css';

function Partners({ partnersList }) {
    return (
        <div className="partner-list">
            {partnersList.map((item, index) => (
                <div className="kartu-partner" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">full article</a>
                </div>
            ))}
        </div>
    );
}

export default Partners;
