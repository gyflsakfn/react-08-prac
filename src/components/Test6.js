import React, { useCallback, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
  const [cnt1, setCnt1] = useState(1)
  const [cnt2, setCnt2] = useState(10)

  const increment = useCallback(() => {
    setCnt1(cnt1 + 1)
  },[cnt1])
  const decrement = useCallback(() => {
    setCnt2(cnt2 - 1)
  },[cnt2])

  return (
    <div>
      <h2>숫자1 : {cnt1}</h2>
      <Test6Sub text="카운트1" cnt={cnt1} />
      <button onClick={increment}>증가</button>
      <hr/>
      <h2>숫자2 : {cnt2}</h2>
      <Test6Sub text="카운트2" cnt={cnt2}/>
      <button onClick={decrement}>감소</button>
    </div>
  );
};

export default Test6;