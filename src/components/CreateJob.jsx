import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setInput } from '../redux/jobSlice';

function CreateJob() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setInput(inputValue));
    };

    return (
        <div className='form-container'>
            <Form className='w-50 m-auto mt-5' onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >
                    <Form.Label>Job Tilte</Form.Label>
                    <Form.Control type="text" name="jobTitle" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" name="company" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" name="salary" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Date-Time</Form.Label>
                    <Form.Control type="text" name="date" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit"
                >
                    Submit
                </Button>
            </Form>

            {/* <Home /> */}
        </div>
    )
}

export default CreateJob;
