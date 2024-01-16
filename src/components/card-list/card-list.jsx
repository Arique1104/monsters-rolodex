import { Component } from 'react';
import './/card-list.styles.css';
import Card from '../card/card.jsx';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
        <div className='card-list'>
            {
               monsters.map(monster => {
                return(
                    <div key={monster.id}>
                        <Card monster={monster}/>
                    </div>
                    
               )}) // add property of monsters 
       
        }
        </div>

        )
}
}

export default CardList;