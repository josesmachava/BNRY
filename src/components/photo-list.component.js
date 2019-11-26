

import React, { useState, useEffect } from 'react';
import axios from 'axios';
function PhotoList() {
    const [data, setData] = useState({photos: [] });
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5001',
        );
        setData(result.data);
      };
      fetchData();
    }, []);
    return (
         <React.Fragment>        
         
         {data.photos.map(photo => (
                  <div key={photo.id}>
            <img src={photo.url} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
        ))}
        </React.Fragment>

    
    );
  }
export default PhotoList;