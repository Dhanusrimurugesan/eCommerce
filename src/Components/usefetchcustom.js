import { useEffect, useState } from "react";
//import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    /*Javascript API Call*/
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];

    /*Axios API Call*/
    // useEffect(() => {
    //     axios(url)
    //         .then((res) => setData(res.data));
    // }, [url]);

    // return [data];
}

export default useFetch;