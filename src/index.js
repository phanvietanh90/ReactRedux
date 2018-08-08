import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAaL1y4eNFhCPKOJ2ZfppHJHJRVWoQ4n6M';
const App = () => {
    return (
    <div> 
     <SearchBar />       
    </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('.container'));