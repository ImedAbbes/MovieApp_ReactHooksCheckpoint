import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addmovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{margin:'0',padding:'0',width:'200px',height:'280px',background:'#860000',border:'none',cursor:'pointer'}}>
      <img src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-No-Background.png" alt="" style={{width:'100px',height:'100px',objectFit:'cover',background:'#860000'}} />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" ref={props.pn} placeholder="movie name" style={{width:'100%'}}/>
          <input type="text" ref={props.pr} placeholder="movie rate ♥♥♥♥♥" style={{width:'100%',marginTop:'5px'}}/>
          <input type="text" ref={props.tr} placeholder="movie trailer URL embedId from youtube" style={{width:'100%',marginTop:'5px'}}/>
          <input type="text" ref={props.pu} placeholder="movie image url" style={{width:'100%',marginTop:'5px'}}/>
          <textarea type="text" ref={props.description} placeholder="movie description" style={{width:'100%',height:'100px',marginTop:'5px', resize:'none'}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();props.fct()}}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;