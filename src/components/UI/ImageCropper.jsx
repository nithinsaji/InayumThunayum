import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

const ImageCropper = ({source, onCrop, width, height, fileName}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const desiredWidth = width;
  const desiredHeight = height;

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    try {
        if (!croppedAreaPixels) return;
  
        const image = new Image();
        image.onload = () => {
        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");

        if (!croppedCtx) return;

        const { x, y, width, height } = croppedAreaPixels;

        croppedCanvas.width = desiredWidth;
        croppedCanvas.height = desiredHeight;
        croppedCtx.drawImage(
            image,
          x,
          y,
          width,
          height,
          0,
          0,
          desiredWidth,
          desiredHeight
        );

        croppedCanvas.toBlob((blob) => {
          if (blob) onCrop(croppedCanvas.toDataURL('image/png'),blob,fileName);
        }, "image/png");
      };
      image.src = source;
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <Cropper
      image={source}
      crop={crop}
      zoom={zoom}
      aspect={4 / 5}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
  )
}
export default ImageCropper;