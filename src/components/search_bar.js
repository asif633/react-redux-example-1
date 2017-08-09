import React, { Component } from 'react';

// Functional Component
// const SearchBar = () => {
//     return <input/>
// };

// Class Component
class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                {/* <input onChange={this.onInputChange} />
                <input
                    value={this.state.term} 
                    onChange={(event) => this.setState({ term: event.target.value })} />
                    Value : {this.state.term} */}
                <input
                    value={this.state.term} 
                    onChange={(event) => this.onInputChange(event.target.value)} />
                
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
        //console.log(event.target.value);
    }
}

export default SearchBar;