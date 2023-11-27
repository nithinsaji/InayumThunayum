import React, { useState } from "react";
import UserService from "../../services/user.service";
import Back from "../UI/Back";
import Button from "../UI/Button";
import ImageCropper from "../UI/ImageCropper";
import './style/image.css'

const UpdateImage = () => {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")) || {});
  const [localImage, setLocalImage] = useState('')
  const [localName, setLocalName] = useState('')
  const [values, setValues] = useState({
    image1: {},
    image2: {},
    image3: {},
  });
  const [preview, setPreview] = useState({
    image1: profile?.images && profile?.images[0] && 'https://drive.google.com/uc?id='+profile.images[0] || "",
    image2: profile?.images && profile?.images[1] && 'https://drive.google.com/uc?id='+profile.images[1] || "",
    image3: profile?.images && profile?.images[2] && 'https://drive.google.com/uc?id='+profile.images[2] || "",
  });

  const onChange = (e) => {
    var file = e.target.files[0]; //the file
    if (file != undefined) {
      setLocalImage(URL.createObjectURL(e.target.files[0]))

      // setPreview({
      //   ...preview,
      //   [e.target.name]: URL.createObjectURL(e.target.files[0]),
      // });
      // var reader = new FileReader(); //this for convert to Base64
      // reader.readAsDataURL(e.target.files[0]); //start conversion...
      // reader.onload = function () {
      //   //.. once finished..
      //   var rawLog = reader.result.split(",")[1]; //extract only thee file data part 
      //   setValues({
      //     ...values,
      //     [e.target.name]: {
      //       data: rawLog,
      //       name: file.name,
      //       type: file.type,
      //     },
      //   });
      // };
    } else {
      setPreview({ ...preview, [e.target.name]: "" });
    }
  };
  const uploadImage = (e) => {
    e.preventDefault();
    UserService.updateImageAPI(values);
  };

  const onCrop = (imageRaw, imageBlob, fileName) =>{
    setPreview({ ...preview, [fileName] : URL.createObjectURL(imageBlob) });
    setValues({
          ...values,
          [fileName]: {
            data: imageRaw.split(",")[1],
            name: Date.now(),
            type: "image/png",
          },
        });
  }

  const confirmCrop = () =>{
    console.log(values);
    setLocalImage("")
  }

  return (
    <div className="image__conatiner">
      <Back title={'Upload Images'}/>
    <div className="image_wrapper">
      {localImage && <div className="imageCropper">
      <ImageCropper source={localImage} onCrop={onCrop} height={400} width={500} fileName={localName} />
      <button onClick={confirmCrop}>crop</button>
      </div> }
      <form onSubmit={uploadImage}>
        <ImageSection preview={preview.image1} name={'image1'} onChange={onChange} setLocalName={setLocalName} />
        <ImageSection preview={preview.image2} name={'image2'} onChange={onChange} setLocalName={setLocalName} />
        <ImageSection preview={preview.image3} name={'image3'} onChange={onChange} setLocalName={setLocalName} />
        <Button style={'glassy'}>Upload Image</Button>
      </form>
    </div>
    </div>
  );
};

export default UpdateImage;

export const PreviewImage = ({ src }) => {
  return (
    <div className="preview_container">
      <img src={src} />
    </div>
  );
};

export const ImageSection = ({preview, onChange, name, setLocalName}) => {
  return (
    <div className="image_container" key={name}>
          {preview ? <PreviewImage src={preview} />: <span>Choose Image</span>}
          <input
            type="file"
            id="file"
            accept="image/*"
            name={name}
            onChange={onChange}
          />
          <label htmlFor="file" onClick={() => setLocalName(name)}></label>
          <div className="image-choose">
            
          </div>
        </div>
  )
}