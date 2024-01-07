import React from 'react'
import './Recommended.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Recommended() {

    const [item, setItem] = useState([]);
    useEffect(()=>{
        axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
        .then(res => setItem(res.data.Items))
        .catch(err => console.log(err));
    },[])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  return (
    <div className='recommended'>
            <div className="items">
                <div className="left1">
                    <h3>Recommended</h3>
                </div>
                <div className="right1">
                    <Button className='h4' onClick={handleShow}>AddMore  </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Add New Card</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <input type="file" />
                                    <input className='text' type="text"  placeholder='Enter Product Name'/>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button className='add' variant="success" onClick={handleClose}>
                                    Add
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        <SlArrowLeft className='aleft'/>
                        <SlArrowRight className='aright'/>
                </div>
            </div>
            <div className="item">
                <div className="img">
                    {
                        item.map((d,i) => {
                            return <img className='a' key={i} src={d.ImageUrl} alt="" />
                        })
                    }
                </div>
                <div className="name">
                    {
                        item.map((d,i) => {
                            return <h6 key={i}>{d.Name}</h6>
                        })
                    }
                </div>
            </div>
    </div>

  )
}

export default Recommended