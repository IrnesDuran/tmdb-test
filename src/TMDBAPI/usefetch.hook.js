import { useState, useEffect } from 'react';

const useFetch = (category, criteria) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/${category}/${criteria}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
      const dataArray = await res.json();
      const results = await dataArray.results;
       setData(results);
    };
    fetchData();
  },[]);

  return data;
};

export default useFetch;