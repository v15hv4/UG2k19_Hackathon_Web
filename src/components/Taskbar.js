import React from 'react'

const Taskbar = () => {
    return (
        <div className='Taskbar container rounded'>
            <div className='row bg-dark pt-1 pl-2'>
                <span className='action-buttons'>
                    <button className='rounded-circle ml-1' style={{ backgroundColor: "red" }}></button>
                    <button className='rounded-circle mx-1' style={{ backgroundColor: "yellow" }}></button>
                    <button className='rounded-circle mr-1' style={{ backgroundColor: "green" }}></button>
                </span>
                <h6 className='text-white mx-auto'>Hackathon2k19</h6>
            </div>
        </div>
    )
}

export default Taskbar
