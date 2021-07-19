import React from 'react';


class Header extends React.Component {
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
            <div className='header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={`${process.env.PUBLIC_URL}/logo-full.svg`} alt='' className='lf'/>
                        <img src={`${process.env.PUBLIC_URL}/logo-short.svg`} alt='' className='ls' />
                    </div>
                    <form onSubmit={this.onFormSubmit} className='search-form'>
                        <input
                            placeholder="Search"
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <button type="submit" className="fas search-button fa-search"></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Header;