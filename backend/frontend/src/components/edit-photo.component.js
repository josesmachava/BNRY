import React , { useState }  from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const EditPhoto = (props) => {

    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [showLoading, setShowLoading] = useState(true);
    
  
    const updatePhoto = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = { url:url, description: description };
        axios.put('http://localhost:5001/update/'+props.match.params.id, data)
          .then((result) => {
            setShowLoading(false);
            props.history.pushState(null, 'list');
          }).catch((error) => setShowLoading(false));
      };
  
  return (
    <form     onSubmit={updatePhoto}>
    <div class="form-group">
    {showLoading >
        <span className="sr-only">Loading...</span>
       }
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

export default EditPhoto;