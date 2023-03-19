import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateJob() {
    return (
        <div className='form-container'>
            <Form className='w-50 m-auto mt-5' >
                <Form.Group className="mb-3" >
                    <Form.Label>Job Tilte</Form.Label>
                    <Form.Control type="text" name="jobTitle" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" name="company" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" name="salary" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Date-Time</Form.Label>
                    <Form.Control type="text" name="date" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Update
                </Button>
            </Form>

        </div>
    )
}

export default UpdateJob
