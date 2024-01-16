import { Component } from "react";
import './/card.styles.css';

class Card extends Component {
    render() {
console.log(this.props)
console.log("render from Card")
// console.log(this.props.id)
const {id, name, email} = this.props.monster;
        // consts for props go here
        // so do console.logs()
        return (
// this is where the div requirement goes for this card component
            <div
                key={`card-container-id-${id}`}
                className='card-container'>
                    
                <img
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;