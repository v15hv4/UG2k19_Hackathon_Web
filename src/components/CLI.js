import React from 'react';

import Response from '../responses/Response';

class CLI extends React.Component {
    state = {
        page: "home",
        command: "",
        response: <span></span>,
        placeholder: "Try 'help' if you have no clue what's going on..."
    };

    componentDidMount() {
        document.querySelector('form .command').addEventListener('blur', () => {
            document.querySelector('form .command').focus();
        })
        document.querySelector('.command').focus();
    }

    handleChange = (e) => {
        this.setState({ command: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ response: Response(this.state.command) });
        this.setState({ command: "", placeholder: "" })
    }
    shiftFocus = e => document.querySelector('.command').focus();
    render() {
        return (
            <div className='CLI container rounded-bottom shadow overflow-auto h-100' onClick={this.shiftFocus}>
                <div className='row pt-3 justify-content-center'>
                    <img src='h19_term_header.png' alt='Hackathon2k19' className="img-fluid"></img>
                </div>
                <div className='row px-3 pt-3'>
                    <form onSubmit={this.handleSubmit} className='col-12 pl-0'>
                        <span className='col-12 col-md-4 px-0 mr-2'>faccha@hackathon2k19: {this.state.page} $</span>
                        <input type='text' className='command' autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" autoFocus onChange={this.handleChange} value={this.state.command} placeholder={this.state.placeholder} />
                    </form>
                </div>
                <div className=' response row px-3 pb-5 pb-md-1'>
                    {this.state.response}
                </div>
            </div>
        );
    }
}

export default CLI;
