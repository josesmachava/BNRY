import React , { useState }  from 'react';

function CreatePhoto() {

    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = e => {
      e.preventDefault()
      console.log({url, description})
      fetch('http://localhost:5001/add', {
       
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, description }),
      })   
    }  
  
  return (
    <form     onSubmit={handleSubmit}>
    <label htmlFor="comment">Your question or comment</label>
  
    <label htmlFor="email">Email (optional)</label> <br />
    <input
      type="text"
      name="url"
      value={url}
      onChange={e => setUrl(e.target.value)}
     />
    <br />
    <textarea
    name="description"
    value={description}
    onChange={e => setDescription(e.target.value)}
    />
  <br />
    <button type="submit">Send it!</button>
  </form>

  );
}

export default CreatePhoto;