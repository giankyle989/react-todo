import React from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true)
  }

  function closeModalHandler(){
    setModalIsOpen(false)
  }

  function confirmedClicked(){
    console.log('success')
  }


  return (
    <div className="card">
      <h1>{props.text}</h1>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmedClicked}/> }
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
    </div>
  );
}
