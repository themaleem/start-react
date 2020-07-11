import React from 'react'

function UserInput(props) {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default UserInput
