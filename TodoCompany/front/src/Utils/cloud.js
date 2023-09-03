import axios from 'axios';

export const handleChangePicture = async (files) => {
  try {
    console.log(files[0]);

    // const { files } = e.target;
    // const copy = [...files];
    let formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'ukrr1ekh');
    let res = await axios.post(
      'https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload',
      formData
    );
    console.log(res.data.secure_url);
    return res.data.secure_url;
  } catch (er) {
    console.log(er.message?.message);
    return alert('Un-Supported File use Jpeg,Jpg,Png format');
  }
};
