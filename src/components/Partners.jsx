import '../styles/Partners.css';

function Partners({ partnersList }) {
    return (
        <div className="partner-list">
            {partnersList.map((item, index) => (
                <div className="kartu-partner" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Partners;
