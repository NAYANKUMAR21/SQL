'use client';
import React, { useState } from 'react';
let arr = [
  { title: 'Assignment', isCompleted: false },
  { title: 'code', isCompleted: false },
  { title: 'game', isCompleted: false },
];
const index = () => {
  const [data, setData] = useState(arr);
  const handleCheck = (itemIndex) => {
    let newArr = data?.map((item, index) => {
      if (index == itemIndex && item.isCompleted == false) {
        return {
          title: item.title,
          isCompleted: item.isCompleted ? false : true,
        };
      }
      return item;
    });
    setData(newArr);
    console.log(newArr);
  };
  const handleClickDelete = (itemIndex) => {
    let newArrFiltered = data.filter((item, index) => {
      return index !== itemIndex;
    });
    setData(newArrFiltered);
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return (
            <li
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <input
                type="checkbox"
                value={item.isCompleted}
                onChange={() => {
                  handleCheck(index);
                }}
              />

              {item.title}
              {item.isCompleted == true && (
                <button onClick={() => handleClickDelete(index)}>
                  Delete Item
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default index;
