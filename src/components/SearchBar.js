import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = event => {
        this.setState({term: event.target.value})
    } //onChange event handler is parsing event object to this function

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        // TODO: make sure we call callback from parent component
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search video</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
                <p>I have {this.props.numOfVideos} videos.</p>
            </div>
        )
    }
}

export default SearchBar;