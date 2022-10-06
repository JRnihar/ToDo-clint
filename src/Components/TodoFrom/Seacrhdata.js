import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';


const Seacrhdata = () => {
    const [lists, setList] = useData()
    const [searchData, setSearchData] = React.useState('');
    const [items, setItem] = useState();

    const handleSearch = (e) => {
        const results = lists.filter(post => {
            if (e.target.value === "") return lists
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchData({
            query: e.target.value,
            list: results
        })


    };
    useEffect(() => {
        searchData?.list?.filter(item => setItem(item))
    }, [searchData?.list])
    console.log(items);
    return (
        <div>  <label htmlFor="search">
            Search by Task:
            <input id="search" type="text" onChange={handleSearch} />
        </label>
        </div>
    );
};

export default Seacrhdata;