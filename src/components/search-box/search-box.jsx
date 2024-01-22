import './/search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
return (
    <input 
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
    )    
};

// class SearchBox extends Component {
//     render() {
//         return (
//             <input 
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler} 
//             />
//         );
//     }
// }

export default SearchBox;