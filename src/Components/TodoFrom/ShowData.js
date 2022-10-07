import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';
import EditTask from './EditTask';
import { useEffect } from 'react';


const ShowData = ({ list, searchData }) => {
    

    const { _id } = list
    const [lists, setList] = useData()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const [items, setItem] = useState();
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);



    useEffect(() => {
        searchData?.list?.map(item => setItem(item))
    }, [searchData?.list])



    const handleDelete = id => {
        const url = `https://to-do-app-server2.onrender.com/list/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                
                const remaining = lists.filter(list => list._id !== id);
                setList(remaining);
            })
    }
    return (
        <tr>
            <td><h5>{items?.title ? items?.title : list?.title}</h5></td>
            <td> <h5>{
                items?.description ? items?.description : list?.description}</h5></td>
            <td> <h5>Pending</h5></td>
            <td><FaRegEdit className='fs-2 me-4 action' variant="primary" onClick={handleShow2} />
                <RiDeleteBin6Fill className='fs-2 text-danger action' data-bs-toggle="modal" data-bs-target="#exampleModal" variant="primary" onClick={handleShow} /></td>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{list.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? You want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(list._id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{list.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? You want to update?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="success">
                        <Link style={{ textDecoration: "none" }} className='text-white' to={`/editTask/${list._id}`}>Update</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default ShowData;