import { useEffect, useState } from 'react';
import Styles from './Image.module.css';
import axios from 'axios';
import useLoading from './Hooks/useLoading';

const App = () => {
  const [Images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useLoading(false);
  const getDataFromJsonServer = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/images?_limit=${5}&_page=${page}`
      );
      setImages((prev) => [...prev, ...data]);
      setLoading(false);
      return;
    } catch (er) {
      console.log(er.message);
    }
  };
  const postDataToServer = async (data) => {
    try {
      await axios.post('http://localhost:8080/images', { image: data });
      getDataFromJsonServer();
    } catch (er) {
      console.log(er.message);
    }
  };

  const singleUpload = async (e) => {
    try {
      const { files } = e.target;
      // const copy = [...files];
      let formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'ukrr1ekh');
      let {
        data,
        data: { secure_url },
      } = await axios.post(
        'https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload',
        formData
      );
      console.log(data);
      console.log(secure_url);
      postDataToServer(secure_url);
    } catch (er) {
      console.log('message->', er.message);
    }
  };
  const infiniteScroll = async () => {
    console.log('scrollHeight', document.documentElement.scrollHeight);
    console.log('innerHeight', window.innerHeight);
    console.log('scrollTop', document.documentElement.scrollTop);
    let scrollHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;
    try {
      if (innerHeight + scrollTop + 1 >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (er) {
      console.log('Infinityscroll handle', er.message);
    }
  };
  useEffect(() => {
    getDataFromJsonServer();
  }, [page]);
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue' }}>Website </span>Images
      </h1>
      <div className={Styles.Input}>
        <input type="file" p={10} onChange={singleUpload} />
      </div>
      <div className={Styles.container}>
        {Images.map((item, index) => {
          return (
            <div key={index} style={{ marginTop: '5px' }}>
              <img src={item.image} alt={`image-${item.id}`} />
            </div>
          );
        })}
      </div>
      {loading ? <h1>...Please Wait</h1> : null}
    </div>
  );
};

export default App;
