import '../styles/Tutors.css';

function Tutors(props) {
    return (
        <div className="tutor-list">
            {
                props.tutorsList.map((item, index) => {
                    return (
                        <div className='kartu-tutor' key={index}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <small>{item.description}</small> {/* Correctly reference item.description */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tutors;
