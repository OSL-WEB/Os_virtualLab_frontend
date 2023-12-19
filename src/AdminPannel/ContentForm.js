import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "../styles/Contentform.css";
function ContentForm() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [editor, setEditor] = useState('');
  const [file, setFile] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !['Assignments', 'Theory Topics', 'Interview questions', 'Recent trends'].includes(category)) {
      alert('Please select a valid category.');
      return;
    }

    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('video', video);
    formData.append('editor', editor);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/api/assignment/addContent', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response);

      if (response.data.message === 'Data Added successfully') {
        toast.success("Data Added Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });

        // Clear form fields by resetting the state
        setCategory('');
        setTitle('');
        setVideo('');
        setEditor('');
        setFile('');
      }
    } catch (error) {
      // Handle errors here
      console.error("Error occurred while adding data:", error);
      toast.error("Failed to add data. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const DashBoradHandler = () => {
    navigate("/AdminPanel/user-profile");
  };

  return (
    <div className='form-main'>
      <h2>Add Content</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='row_input'>
          <label><p>Category: <sup className='star'>*</sup> </p></label>
          <select value={category} required onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Assignments">Assignments</option>
            <option value="Theory Topics">Theory Topics</option>
            <option value="Interview questions">Interview questions</option>
            <option value="Recent trends">Recent trends</option>
          </select>
        </div>
        <div className='row_input'>
          <label>Title :</label>
          <input  placeholder='Enter the title'  type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='row_input'>
          <label>Video:</label>
          <input  placeholder='Video link' type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
        </div>

        {
  category === "Assignments" && (
    <div className='row_input'>
      <label>Editor:</label>
      <select value={editor} onChange={(e) => setEditor(e.target.value)}>
        <option value="">Select Editor</option>
        <option value="https://www.onlinegdb.com/">Shell</option>
        <option value="https://www.onlinegdb.com/">C Compiler</option>
      </select>
      
    </div>
  )
}

        <div className='choose-file'>
          <label>Notes (File):</label>
          <input className='fille' type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <div><button className='Dashborad' onClick={DashBoradHandler}> DashBoard</button></div>
      </div>
    </div>
  );
}

export default ContentForm;
