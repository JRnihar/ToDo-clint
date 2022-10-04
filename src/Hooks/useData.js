import { useEffect, useState } from "react";

const useData = () => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        fetch('https://to-do-app-server2.onrender.com/list')
            .then(res => res.json())
            .then(data => setList(data));
    }, [lists])
    return [lists, setList]
}

export default useData;