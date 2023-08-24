import { Inter } from 'next/font/google';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [state, setState] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData([...data, state]);
  };
  const style = {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    aliginItems: 'center',
    border: '1px solid black',
  };
  return (
    <div style={style}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            style={{ padding: '10px', borderRadius: '5px' }}
            type="text"
            placeholder="Enter Blog content"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </form>
        <div>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <div dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
