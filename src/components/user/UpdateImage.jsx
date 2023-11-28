import React, { useState } from "react";
import { toast } from "sonner";
import UserService from "../../services/user.service";
import Back from "../UI/Back";
import Button from "../UI/Button";
import ImageCropper from "../UI/ImageCropper";
import "./style/image.css";

const UpdateImage = () => {
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile")) || {}
  );
  const [localImage, setLocalImage] = useState("");
  const [localName, setLocalName] = useState("");
  const [values, setValues] = useState({
    image1: {
      data: "",
      name: Date.now(),
      type: "image/png",
      work: "initial",
    },
    image2: {
      data: "",
      name: Date.now(),
      type: "image/png",
      work: "initial",
    },
    image3: {
      data: "",
      name: Date.now(),
      type: "image/png",
      work: "initial",
    },
  });
  const [preview, setPreview] = useState({
    image1:
      profile?.images?.image1 &&
      ("https://drive.google.com/uc?id=" + profile?.images?.image1 || ""),
    image2:
      profile?.images?.image2 &&
      ("https://drive.google.com/uc?id=" + profile?.images?.image2 || ""),
    image3:
      profile?.images?.image3 &&
      ("https://drive.google.com/uc?id=" + profile?.images?.image3 || ""),
  });

  const onChange = (e) => {
    var file = e.target.files[0]; //the file
    if (file != undefined) {
      if (file.size <= 2097152) {
        setLocalImage(URL.createObjectURL(e.target.files[0]));
      } else {
        toast.error("You cannot upload more than 2MB file");
      }

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
    setLoading(true)
    UserService.updateImageAPI(values).then((res) => {
      setValues({image1: {
        data: "",
        name: Date.now(),
        type: "image/png",
        work: "initial",
      },
      image2: {
        data: "",
        name: Date.now(),
        type: "image/png",
        work: "initial",
      },
      image3: {
        data: "",
        name: Date.now(),
        type: "image/png",
        work: "initial",
      },})
      res.status === 'success' ? toast.success("Image Uploaded successfully") : toast.error("Image Upload Failed. Try again.");
      setLoading(false)
    });
  };

  const onCrop = (imageRaw, imageBlob, fileName) => {
    setPreview({ ...preview, [fileName]: URL.createObjectURL(imageBlob) });
    setValues({
      ...values,
      [fileName]: {
        data: imageRaw.split(",")[1],
        name: Date.now(),
        type: "image/png",
        work: "upload",
      },
    });
  };

  const confirmCrop = () => {
    setLocalImage("");
  };

  const onDelSelected = (e, name) => {
    e.preventDefault();
    setPreview({ ...preview, [name]: "" });
    setValues({
      ...values,
      [name]: {
        data: "",
        name: Date.now(),
        type: "image/png",
        work: "delete",
      },
    });
  };
  

  return (
    <div className="image__conatiner">
      <Back title={"Upload Images"} />
      <div className="image_wrapper">
        {localImage && (
          <div className="imageCropper">
            <ImageCropper
              source={localImage}
              onCrop={onCrop}
              height={500}
              width={400}
              fileName={localName}
            />
            <Button style={"outline"} onClick={() => confirmCrop()}>
            <i class="fa-solid fa-crop-simple"></i>
              crop
            </Button>
          </div>
        )}
        <div>
          <div className="image-container">
            <ImageSection
              preview={preview.image1}
              name={"image1"}
              onChange={onChange}
              setLocalName={setLocalName}
              onDelSelected={onDelSelected}
            />
            <ImageSection
              preview={preview.image2}
              name={"image2"}
              onChange={onChange}
              setLocalName={setLocalName}
              onDelSelected={onDelSelected}
            />
            <ImageSection
              preview={preview.image3}
              name={"image3"}
              onChange={onChange}
              setLocalName={setLocalName}
              onDelSelected={onDelSelected}
            />
          </div>
          <div className="image-btn">
            <Button style={"outline"} onClick={() => uploadImage()}>
              {loading ? 'Uploading...' :'Upload Image'}
            </Button>
          </div>
        </div>
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

export const ImageSection = ({
  preview,
  onChange,
  name,
  setLocalName,
  onDelSelected,
}) => {
  return (
    <div>
      <div className="image_container" key={name}>
        {preview && <PreviewImage src={preview} />}
        <input
          type="file"
          id="file"
          accept="image/*"
          name={name}
          onChange={onChange}
        />
        <label htmlFor="file" onClick={() => setLocalName(name)}></label>
        <div className="image-choose">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
          <span>Choose file to upload</span>
        </div>
      </div>
      <div className="img-delete">
        <Button style={"outline"} onClick={(e) => onDelSelected(e, name)}>
          <i class="fa-regular fa-trash-can"></i>
        </Button>
      </div>
    </div>
  );
};
