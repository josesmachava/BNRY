

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navegation from './navegation.component';


const PhotoList = (props) => {
    const [data, setData] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5001',
        );
        setData(result.data);
        setShowLoading(false);
      };
      fetchData();
    }, []);

    const deletePhoto = (id) => {
     setShowLoading(true);
      axios.delete('http://localhost:5001/'+id)
        .then((result) => {
          setShowLoading(false);
          props.history.push('/list')
        }).catch((error) => setShowLoading(false));;
    };

    const EditPhoto = (id) => {
      props.history.push({
        pathname: '/edit/' + id
      });
    };
  
    return (
         
       <div className="container-fluid">
       <div className="row">
       <div className="col-md-2">
            <Navegation />
       </div>
       <div className="col-md-10">
       {showLoading >
        <span className="sr-only">Loading...</span>
       }
       <table class="table table-striped">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">url</th>
           <th scope="col">description</th>
         </tr>
       </thead>
       <tbody>
       {data.map(photo => (
         <tr key={photo._id}>
         <th scope="row">{photo._id}</th>
         <td>{photo.url}</td> 
         <td>{photo.description}</td>
         <td  onClick={() => { deletePhoto(photo._id) }}>   <i class="fa fa-trash" aria-hidden="true"></i></td>
         <td  onClick={() => { EditPhoto(photo._id) }}> <i class="fa fa-pencil" aria-hidden="true"></i></td>
     
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