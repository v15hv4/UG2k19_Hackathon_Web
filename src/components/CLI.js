import React, { useState } from 'react'

const CLI = () => {
    const [page, setPage] = useState("home");
    const [command, setCommand] = useState("")
    const handleChange = (e) => {
        setCommand(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCommand("");     
        console.log(command);
    }
    return (
        <div className='CLI jumbotron rounded-0 mx-0 pt-1' style={{ height: "80vh" }}>
            {/* <div className='row justify-content-center'>
                <img src="TitleASCIIArt.png" class="img-fluid" alt="Responsive image" />
            </div> */}
            <div className='row'>
                faccha@hackathon2k19: {page} $
                <form onSubmit={handleSubmit}>
                    <input type='text' className='command ml-2' autoFocus onChange={handleChange} value={command} />
                </form>
            </div>
        </div>
    )
}

export default CLI
