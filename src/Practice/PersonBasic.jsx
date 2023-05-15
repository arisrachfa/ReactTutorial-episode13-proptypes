import React from 'react'

const PersonBasic = (props) => {
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person: {props.isMarried ? "is" : "not"} Married</h1>
        <br/>
        <h1>My Friends is :</h1>
        {props.friends.map((friend) => (
            <h1>{friend}</h1>
            )
        )}
    </div>
  )
}

export default PersonBasic