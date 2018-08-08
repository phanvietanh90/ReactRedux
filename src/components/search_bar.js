import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return < input onChange={(event) => console.log(event.target.value)} />;
    }
}

// the same with:
// const SearchBar = () => {
//     return < input />;
// };

export default SearchBar;