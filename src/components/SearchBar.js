import React from 'react';

class SearchBar extends React.Component{
    state = {
       term: "" 
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <div className="ui form">
                    <form onSubmit={this.onFormSubmit}className="field">
                        <label>Image Search</label>
                        <input 
                        type="text"
                        onChange={e => this.setState({term: e.target.value})}
                        value={this.state.term}/>
                    </form>
                </div> 
            </div>
        );
    }
} 

export default SearchBar;