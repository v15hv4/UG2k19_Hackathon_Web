import React from 'react'

class CLI extends React.Component {
    state = {
        page: "home",
        command: "",
        response: null
    }
    handleChange = (e) => {
        this.setState({ command: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.command);
        this.setState({ command: "" })
    }
    render() {
        return (
            <div className='CLI jumbotron rounded-0 mx-0 pt-1' style={{ height: "80vh" }}>
                <div className='row justify-content-center'>
                    <p className='lead text-center'>Welcome. To get more information, inspect the contents of this directory. </p>
                </div>
                <div className='row'>
                    faccha@hackathon2k19: {this.state.page} $
                <form onSubmit={this.handleSubmit}>
                        <input type='text' className='command ml-2' autoFocus onChange={this.handleChange} value={this.state.command} />
                    </form>
                </div>
                <div className='row'>
                </div>
            </div>
        )
    }
}

export default CLI
