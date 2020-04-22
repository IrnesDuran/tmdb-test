import { useState, useEffect } from 'react';

const useFetch = (category, criteria) => {
  const [data, setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
       const res = await fetch(`https://api.themoviedb.org/3/${category}/${criteria}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
       const dataArray = await res.json();
       const results = await dataArray.results;
      //  results.forEach(item => {
      //   setData(item);
      //  });

      setData(results);
      

     };

     fetchData();
    // fetch(`https://api.themoviedb.org/3/${category}/${criteria}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`)
    // .then(res => res.json()).then(data=> setData(data)).catch(err=> console.log(err))
  
  },[]);
  console.log(data)

  return data;
};

export default useFetch;