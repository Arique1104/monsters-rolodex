import { Component } from 'react';
import './/card-list.styles.css';
import Card from '../card/card.jsx';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
        <div class='card-list'>
            {
               monsters.map(monster => {
                return(
                    <Card monster={monster}/>
               )}) // add property of monsters 
       
        }
        </div>

        )
}
}

export default CardList;