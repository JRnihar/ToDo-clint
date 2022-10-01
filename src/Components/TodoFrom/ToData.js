import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import ShowData from './ShowData';

const ToData = () => {
    const [lists, setList] = useData()

    return (
        <div>
            <h1 className=' text-center mt-5'>Let's See Your Task List !!!</h1>
            <div className="title mt-5"><span>Your Total Task : {lists.length}</span></div>
            <div className="container mt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"><h4>Task Title</h4></th>
                            <th scope="col"><h4> Description</h4></th>
                            <th scope="col"><h4>Action</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map(list =>
                                <ShowData key={list._id} list={list}></ShowData>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToData;