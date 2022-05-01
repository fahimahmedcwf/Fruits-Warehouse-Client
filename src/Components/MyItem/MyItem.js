import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './MyItem.css'

const MyItem = ({ myItem }) => {
    const { userEmail, name, price, description, img, quantity, supplierName } = myItem
    return (
        <div>
            <CardGroup className='shadow p-1 mb-5 bg-body rounded'>
                <Card>
                    <div>
                        <Card.Img variant="white img-fluid" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <h6>UserEmail: {userEmail}</h6>
                        <h6>Price: ${price}</h6>
                        <p>{description}</p>
                        <p><span className='fw-bold'>Quantity/In-Stock:</span> <span className='text-danger fw-bold'> {quantity} KG</span></p>
                        <p><span className='fw-bold'>SupplierName:</span> {supplierName}</p>
                    </Card.Body>
                    {/* <div className='d-flex justify-content-between card-footer'>
                        <button onClick={() => handleDelete(_id)} className='border-0 btn-dark all-btn'>Delete</button>
                    </div> */}
                </Card>
            </CardGroup>
        </div >
    );
};

export default MyItem;