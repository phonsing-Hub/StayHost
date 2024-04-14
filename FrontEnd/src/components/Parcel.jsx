import React from 'react'
import Nav from '../controllers/Nav'
import '../../public/css/Parcel.css'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Parcel() {
  const [inputValue, setInputValue] = React.useState('')

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Input something</i>,
      input: 'text',
      inputValue,
      preConfirm: () => {
        setInputValue(Swal.getInput()?.value || '')
      },
    })
  }

  return (
    <>
    <Nav/>
    <div className="Parcel">
      <button onClick={showSwal}>Show SweetAlert2 modal</button>
      <div>Your input: {inputValue}</div>
      </div>
    </>
  )
}

export default Parcel
