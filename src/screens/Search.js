import React from 'react';
import { render } from 'react-dom';
import Header from '../components/Header';


let searchTerm;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { repos: [] };
    }


    render() {
        return(
           <div>
                <Header title="Search"/>
                
                <form>
                <h2>Search GitHub Repos</h2>
                <input type="text" className="searchbox"  ref={(input) => { this.searchBox = input; }}/>
                <button onClick={this.onClick}>Search</button>
                </form>
                <ul>
                    {this.state.repos.map( ( item, index ) => (
                    <div key={ item.id }>
                        <a href={item.html_url}>
                        <li>
                            { item.name }
                        </li>
                        </a>
                       
                    </div>
                    )) }
                </ul>
            </div>
            );
    }
    
    onClick(event) {
        searchTerm = this.searchBox.value;
        let endpoint = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + searchTerm;
            fetch(endpoint)
            .then(resp => resp.json())
            .then(respJson => {
                console.log(respJson.items)
                this.setState({ repos: respJson.items })
            
            });
        event.preventDefault();

    }
};

export default Search;
