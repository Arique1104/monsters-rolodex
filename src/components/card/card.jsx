import './/card.styles.css';

const Card = ({id, name, email}) => (
    <div 
    className='card-container'
        key={`card-container-id-${id}`}
        >
        <img 
            src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>

    </div>
);
// class Card extends Component {
//     render() {
// const {id, name, email} = this.props.monster;
//         return (
//             <div
//                 key={`card-container-id-${id}`}
//                 className='card-container'>
//                 <img
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                     alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;