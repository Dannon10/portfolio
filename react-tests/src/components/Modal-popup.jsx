import { useState } from 'react'
import Modal from './Modal'

export default function Modalpopup() {

    const [showModal, setShowModal] = useState(false)

    function handleTogglePopup() {
        setShowModal(!showModal)
    }

    function onCloseModal() {
        setShowModal(false)
    }


  return (
    <div>
        <button onClick={handleTogglePopup}>Open Modal Popup</button>
        {
            showModal ? <Modal onCloseModal={onCloseModal}/> : null
        }
    </div>
  )
}
