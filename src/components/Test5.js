import React, { useCallback, useState } from 'react';

const Test5 = () => {
  const [count, setCount] = useState(1)
  const ran = Math.random()

  const onUp = useCallback(() => {
    console.log(ran)
    setCount( count + 1)
  },[count])

  const onDown = useCallback(() => {
    console.log(ran)
    setCount( count - 1)
  },[count])
  return (
    <div>
      <h2>카운트 : {count}</h2>
      <button onClick={onUp}>증가</button>
      <button onClick={onDown}>감소</button>
    </div>
  );
};

export default Test5;