import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import { deleteJob } from '../redux/jobSlice'
import UpdateJob from './UpdateJob';

function Home() {
    let dispatch = useDispatch();
    const storeData = useSelector((state) => {
        return state.input.jobs
    })
    return (
        <div className='container'>
            <div className="btn d-flex flex-end mt-4">
                <Link to="/add-job">Add Job</Link>
            </div>

            <div className="jobdetails">
                <div className="singlecard d-flex justify-content-center flex-wrap gap-4 mt-4">
                    {
                        storeData.map((item, i) => {
                            return (
                                <Card style={{ width: '18rem' }} key={i}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Company name :{item.company}</Card.Subtitle>
                                        <div className='d-flex gap-3'>
                                            <Card.Subtitle className="mb-2 text-muted">Salary:{item.salary}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted"> Date:{item.date}</Card.Subtitle>
                                        </div>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <div className='d-flex gap-3'>
                                            <Link to="/update"
                                                onClick={() => UpdateJob({ id: i, ...item })}
                                            >Edit</Link>
                                            <Link to="#"
                                                onClick={() => {
                                                    dispatch(deleteJob({ id: i }))
                                                }}
                                            >Delete</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
