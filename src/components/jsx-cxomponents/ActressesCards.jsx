import { useEffect, useState } from "react";
import "../css-components/ActressesCards.css"

const ActressesCards = props => {

    const [filter, setFilter] = useState(``);
    const [filteredActresses, setFilteredActresses] = useState([]);

    useEffect(() => setFilteredActresses(
        props.actressesList.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    ), [filter])

    return (

        <section id="actresses-cards">

            <h2>Actresses</h2>

            <label>
                <span>Search by Name</span>
                <input type="text" name="actresses-name" value={filter} onChange={e => (setFilter(e.target.value))}/>
            </label>

            <div className="flex-container">

                {filteredActresses.map(el => <div key={el.id} className='card'>

                    <img src={el.image} alt={el.name} />

                    <h3>{el.name}</h3>

                    <div className="act-description" hidden={props.open.actresses !== el.id}>

                        <address>

                            Born on: {el.birth_year}
                            <br />
                            Nationality: {el.nationality}

                        </address>

                        <h4>Know for:</h4>
                        <p>{el.known_for.join(`, `)}</p>

                        <h4>Biography:</h4>
                        <p>{el.biography}</p>

                        <h4>Awards:</h4>
                        <p>{el.awards.join(`, `)}</p>

                    </div>

                    <button hidden={props.open.actresses === el.id} onClick={() => props.setOpen({ ...props.open, actresses: el.id })}>

                        <i className="bi bi-chevron-down"></i>
                        More info

                    </button>

                    <button hidden={props.open.actresses !== el.id} onClick={() => props.setOpen({ ...props.open, actresses: undefined })}>

                        <i className="bi bi-chevron-up"></i>
                        Close info

                    </button>

                </div>

                )}

            </div>

        </section>

    );
};

export default ActressesCards