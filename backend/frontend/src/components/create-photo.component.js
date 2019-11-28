import React , { useState }  from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const CreatePhoto = (props) => {

    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    
    const savePhoto = e => {
      e.preventDefault()
      console.log({url, description})
      axios.post('http://localhost:5001/add', { url:url, description: description })
      .then(function(response){
         props.history.push('/list')
        console.log('salvo com sucesso')
      });  
    
    }  
  
  return (
    <form     onSubmit={savePhoto}>
    <div class="form-group">
    <label htmlFor="url">Insert image URL</label> <br />
    <input
      className="form-control"
      id="url" aria-describedby="urlHelp" placeholder="Insert image url"
      type="text"
      name="url"
      value={url}
      onChange={e => setUrl(e.target.value)}
     />
  
        
    </div>

    <div class="form-group">
    <label for="description">Image description</label>
   
    <textarea
    name="description"
    rows="3"
    id="description"
    className="form-control"
    value={description}
    onChange={e => setDescription(e.target.value)}
    />
 
  </div>
 
    <button type="submit" className="btn btn-primary">Save</button>
  </form>

  );
}

export default CreatePhoto;