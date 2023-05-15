import React from 'react'
import PersonBasic from './PersonBasic'

const BioPerson = () => {
    // kelemahan dari javascript yaitu tidak langsung mendefiniskan suatu variabel dengan sebuah type data
    // oleh karena itu variabel name bisa diisi dengan type data number bukan hanya string dan juga sebaliknya

  return (
    <div className='App'>
        <PersonBasic
            name={89}
            email="aris@mail.com"
            age="27"
            isMarried={true}
            friends={["jack", "brian", "james"]}
        />
    </div>
  )
}

export default BioPerson