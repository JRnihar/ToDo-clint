import React, { useEffect, useState } from 'react'
import ShowData from './ShowData';

const ToData = () => {
    const [lists, setList] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        fetch('https://to-do-app-server2.onrender.com/list')
            .then(res => res.json())
            .then(data => {
                if (searchData){
                    const filterdata = data.filter(list => list.title.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))
                    setList(filterdata)
                    console.log(filterdata);
                }else{
                    setList(data)
                }
                
            });
    }, [searchData, lists])


    const handleSearch = (e) => {
        e.preventDefault()
        const name = e.target.search.value     
        setSearchData(name)
    };
    console.log(searchData);



    return (
        <div>
            <h1 className=' text-center mt-5'>Let's See Your Task List !!!</h1>
            <div className="title mt-5"><span>Your Total Task : {lists.length}</span></div>
         
            <form className='d-flex justify-content-center align-items-center' onSubmit={handleSearch}>
                <input class="form-control w-25" placeholder='Search Your List' name='search' type="text" />
                <input class="btn btn-primary" type="submit" value="submit"  />
                </form>
            <div className="container mt-3">
                {
                    lists.length > 0
                        ?
                        <>
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
                                            <ShowData searchData={searchData} key={list._id} list={list}></ShowData>

                                        )
                                    }
                                </tbody>
                            </table>
                        </>
                        :
                        <div className='d-flex h-100 justify-content-center align-items-center'>
                            <img className='img-fulid' src="https://vinoroc.com/static/app/images/no-record-found.76d6bd93c23b.gif" alt="" srcset="" />
                        </div>

                }
            </div>
        </div>
    );
};

export default ToData;