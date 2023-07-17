import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const photosPromise = axios.get('/api/photos');
    const topicsPromise = axios.get('/api/topics');
    
    const promises = [photosPromise, topicsPromise];

    Promise.all(promises)
      .then((arrOfResults) => { // only fires after ALL promises have resolved
        const photosResponse = arrOfResults[0];
        const topicsResponse = arrOfResults[1];

        const photos = photosResponse.data;
        const topics = topicsResponse.data;

        setPhotos(photos);
        setTopics(topics);
      }); 
    
  }, []);

  // useEffect(() => {
  //   axios.get('/api/photos') // http://localhost:8001/api/photos
  //     .then((response) => {
  //       const photos = response.data;
  //       setPhotos(photos);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios.get('/api/topics') // http://localhost:8001/api/photos
  //     .then((response) => {
  //       const topics = response.data;
  //       setTopics(topics);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8001/api/photos')
  //     .then(res => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setPhotos(data);
  //     });
  // }, []);

  return (
    <div>
      <h2>DataFetching component</h2>
      <h2>Num photos fetched: {photos.length}</h2>
    </div>
  );
};

export default DataFetching;