import React from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import "../styles/ContentTable.css";
import {MdDelete} from "react-icons/md";
import {GrYoutube} from "react-icons/gr";
import  {SiCompilerexplorer} from "react-icons/si"
const ContentTable = (props) => {
  const { setfeaturedata,featuredata, category } = props;
  const filteredData = featuredata ? featuredata.filter((data) => data.category === category) : [];

  const displayToast = () => {
    toast.error(`${category} is Empty`);
  };

  const showPdf = (file) => {
    window.open(`http://localhost:8080/files/${file}`, "_blank", "noreferrer");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/assignment/deleteAssignment/${id}`);
      toast.success("Deleted Successfully");
  
      // Update state to trigger re-render
      // Example: Assuming you have a state setter function setFeatureData
      setfeaturedata(updatedData => updatedData.filter(data => data._id !== id));
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error Occurred");
    }
  };
  

  return (
    <div className='content-table-main'>
      {filteredData.length > 0 ? (
        <div className='header_fixed'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              
              {category === "Assignments" && <th>Editor</th>}
              <th>Video</th>
              <th>Pdf</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data,index) => (
              
              <tr key={data._id}>
            
                <td>{ `${index + 1}.${data.title}`}</td>
               
              

                {data.category==="Assignments" && (
                <td><a  className="video" href={data.editor} target="_blank" rel="noopener noreferrer"><SiCompilerexplorer/></a></td>
                  ) }

                {data.video ? (
                <td><a  className="video" href={data.video} target="_blank" rel="noopener noreferrer"><GrYoutube /></a></td>
                  ) : (<td></td>)}
                <td>
              <div >
             <img  onClick={() => showPdf(encodeURIComponent(data.file))} className ="pdf-image" src={process.env.PUBLIC_URL + '/image/PDF_file_icon.svg.png'} alt="PDF Icon" />
             </div> </td>

               <td> <MdDelete className='Delete-icons' onClick={() => handleDelete(data._id)}></MdDelete></td>

               
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        <div>{displayToast()}</div>
      )}
    </div>
  );
};

export default ContentTable;
