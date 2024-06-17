import React, { useState } from 'react';
import '../styles/Tutors.css';

function Tutors({ tutorsList }) {
  const [selectedTutor, setSelectedTutor] = useState(null);

  const openModal = (tutor) => {
    setSelectedTutor(tutor);
  };

  const closeModal = () => {
    setSelectedTutor(null);
  };

  return (
    <>
      <div className="tutor-list">
        {tutorsList.map((item, index) => (
          <div className="kartu-tutor" key={index} onClick={() => openModal(item)}>
            <img src={item.image} alt={item.name} />
            <div className="tutor-info">
              <p>{item.name}</p>
              <small>{item.description}</small>
            </div>
          </div>
        ))}
      </div>
      {selectedTutor && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>×</span>
            <img src={selectedTutor.image} alt={selectedTutor.name} className="modal-image" />
            <p>{selectedTutor.modalText}</p>
            <small>{selectedTutor.modalDescription}</small>
          </div>
        </div>
      )}
    </>
  );
}

export default Tutors;
