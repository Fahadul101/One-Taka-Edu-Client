import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddReview = () => {

    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange =(e)=>{
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = () =>{
           
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('courseName', info.courseName);
        formData.append('price', info.price);
      
        fetch('https://polar-sea-70775.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <section className="row">
        
          
          
          <Sidebar></Sidebar>
         
        <div className="col-md-10 p-4 pr-5"style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5  className="text-center">Add a Course</h5>
            <form onSubmit={handleSubmit}>
                    
                    

                        <div class="mb-3">
                            <label for="uploadImage" class="form-label">Upload image</label>
                            <input onChange={handleFileChange} type="file" class="form-control"/>
                        </div>
                        {/* course name */}
                        <div class="mb-3">
                            <label for="courseName" class="form-label">Course Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="courseName"/>
                            
                        </div>
                        {/* instructor Name  */}
                        <div class="mb-3">
                            <label for="name" class="form-label">Instructor Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name"/>
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input onBlur={handleBlur} type="number" class="form-control" placeholder="1 Taka Each Course" price="price"/>
                        </div>
                    
                    <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>

        </section>
    );
};

export default AddReview;