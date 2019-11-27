

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navegation from './navegation.component';


const PhotoList = () => {
    const [data, setData] = useState({photos: [] });
  
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
         
       <div className="container-fluid">
       <div className="row">
       <div className="col-md-2">
            <Navegation />
       </div>
       <div className="col-md-10">
       <table class="table table-striped">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">url</th>
           <th scope="col">description</th>
         </tr>
       </thead>
       <tbody>
       {data.photos.map(photo => (
         <tr key={photo._id}>
         <th scope="row">{photo._id}</th>
         <td>{photo.url}</td> 
         <td>{photo.description}</td>
     
         </tr>
     
     ))}
     
     
       </tbody>
     </table>
       
     </div>
       </div> 

        

    
        
        </div>
    
    );
  }
export default PhotoList;