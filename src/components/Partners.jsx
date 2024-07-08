import { useState } from 'react';
import '../styles/Partners.css';

function Partners({ partnersList }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const openModal = (partner) => {
        setSelectedPartner(partner);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="partner-list">
            {partnersList.map((partner, index) => (
                <div className="kartu-partner" key={index} onClick={() => openModal(partner)}>
                    <img src={partner.image} alt={partner.title} />
                    <h3>{partner.title}</h3>
                </div>
            ))}

            {/* Modal */}
            {selectedPartner && (
                <div className={`partner-modal ${modalOpen ? 'active' : ''}`} onClick={closeModal}>
                    <div className="partner-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="partner-modal-close" onClick={closeModal}>&times;</span>
                        <iframe
                            src="https://www.halodoc.com/artikel/ini-obat-pelancar-haid-yang-aman-secara-medis"
                            title="Halodoc"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Partners;
