import React, { useEffect, useState, useMemo } from 'react';

const user = [
  {id: 1, name:'김태리'},
  {id: 2, name:'다음'},
  {id: 3, name:'daum'},
  {id: 4, name:'네이버'},
  {id: 5, name:'NAVER'},
  {id: 6, name:'nate'},
  {id: 7, name:'NaTE'},
  {id: 8, name:'DAUM'},
]

const Test4 = () => {
  const [text, setText] = useState('')
  //setData( data.filter(item => item.name.toLowerCase()
  // .includes(text.toLowerCase())))

  const data = useMemo(() => {
    return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  }, [text])

  return (
    <div>
      <input type="text" value={text} 
      onChange={e => setText(e.target.value)} />
      
      <hr />
      <ul>
        {
          data.map(item => <li key={item.id}>
            {item.id} / {item.name}
          </li>)
        }
      </ul>
    </div>
  );
};

export default Test4;