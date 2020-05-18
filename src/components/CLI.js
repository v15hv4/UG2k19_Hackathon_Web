import React from 'react'

import Response from '../responses/Response'

class CLI extends React.Component {
    state = {
        page: "home",
        command: "",
        response: <span></span>
    }
    componentDidMount() {
        document.querySelector('.command').focus();
    }
    handleChange = (e) => {
        this.setState({ command: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ response: Response(this.state.command) });
        this.setState({ command: "" })
    }
    shiftFocus = e => document.querySelector('.command').focus();
    render() {
        return (
            <div className='CLI jumbotron mx-0 pt-0 rounded-bottom shadow overflow-auto' onClick={this.shiftFocus} style={{ height: "80vh" }}>
                <div className='row justify-content-center'>
                    <img src='h19_term_header.png' alt='Hackathon2k19' className="img-fluid"></img>
                </div>
                <div className='row pt-3'>
                    <form onSubmit={this.handleSubmit} className='col-12 pl-0'>
                        <span className='col-12 col-md-4 px-0'>faccha@hackathon2k19: {this.state.page} $</span>
                        <input type='text' className='command px-1 col-12 col-md-8' autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={this.handleChange} value={this.state.command} />
                    </form>
                </div>
                <div className='row'>
                    {this.state.response}
                </div>
            </div>
        )
    }
}

export default CLI
