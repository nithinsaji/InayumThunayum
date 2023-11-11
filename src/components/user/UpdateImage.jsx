import React, { useState } from 'react'
import UserService from '../../services/user.service';

const UpdateImage = ({id}) => {

    const [values, setValues] = useState({
        image1: {},
        image2: {},
        image3 : {}
      });
      const [preview, setPreview] = useState({
        image1: '',
        image2: '',
        image3 : ''
      });

    const onChange = (e) => {
        var file = e.target.files[0] //the file
        
        console.log(file);
    if(file != undefined){
      setPreview({...preview,[e.target.name]: URL.createObjectURL(e.target.files[0])})
      var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function () { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      setValues({ ...values, [e.target.name]: {
        data : rawLog,
        name : file.name,
        type : file.type
      } });
    }}else{
      setPreview({...preview,[e.target.name]: ''})
    }
      };
      const uploadImage = (e) =>{
        e.preventDefault();
        UserService.updateImageAPI(values,id)
      }
  return (
    <div>
        <form onSubmit={uploadImage}>
          {preview.image1 && <PreviewImage src={preview.image1} />}
        <input type="file" accept='image/*' name='image1' onChange={onChange}/>
        {preview.image2 && <PreviewImage src={preview.image2} />}
        <input type="file" accept='image/*' name='image2' onChange={onChange}/>
        {preview.image3 && <PreviewImage src={preview.image3} />}
        <input type="file" accept='image/*' name='image3' onChange={onChange}/>
        <button>Upload Image</button>
        </form>
    </div>
  )
}

export default UpdateImage

export const PreviewImage = ({src}) =>{
  return(
    <div className='preview_container'>
      <img src={src}/>
    </div>
  )
}