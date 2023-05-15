import React from 'react'
import PersonUsingPropType from './PersonUsingPropType'

const BioPersonSafety = () => {
    // dengan menggunakan propTypes maka nantinya akan muncul peringatan pada console log bahwa ada masalah pada type data props
    // contohnya yaitu pada props age yang dimana pada PersonUsingPropType sudah ditentukan bahwa type data age adalah number
    //  dan ketika diisi dengan type data lain maka akan ada peringatan bahwa type data yang dimasukan salah.
    // namun kekurangan dari package propTypes ini yaitu program akan tetap berjalan
    //  oleh karena itu lebih baik menggunkaan typeScript untuk membuat React menjadi Type Safety

  return (
    <div className='App'>
        <PersonUsingPropType
            name="Aris" // tipe data string
            email="aris@mail.com" // tipe data string
            age="27" // tipe data number
            isMarried={true} // tipe data boolean
            friends={["jack", 1, "james"]} // tipe data array string
        />
    </div>
  )
}

export default BioPersonSafety