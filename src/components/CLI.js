import React from 'react'

import Response from '../responses/Response'

class CLI extends React.Component {
    state = {
        page: "home",
        command: "",
        response: <span></span>
    }
    handleChange = (e) => {
        this.setState({ command: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ response: Response(this.state.command) });
        this.setState({ command: "" })
    }
    render() {
        return (
            <div className='CLI jumbotron mx-0 pt-0 rounded-bottom shadow' style={{ height: "80vh" }}>
                <div className='row justify-content-center'>
                    <p className='lead text-center'>Welcome. To get more information, inspect the contents of this directory. </p>
                </div>
                <div className='row pt-3'>
                <form onSubmit={this.handleSubmit}>
                        faccha@hackathon2k19: {this.state.page} $
                        <input type='text' className='command ml-2' autoFocus onChange={this.handleChange} value={this.state.command} />
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
