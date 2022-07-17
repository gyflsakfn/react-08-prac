import React, { useState, useMemo } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
  const [cnt, setCnt] = useState(1)

  const onUp = () => {
    setCnt(cnt + 1)
  }

  const fun = useMemo(() => {
    return <Test2Sub cnt={cnt}/>
  }, [cnt])

  return (
    <div>
      <h1> 출력 : {cnt}</h1>
      <button onClick={onUp}> 증가 </button>
      <hr />
      {fun}
    </div>
  );
};

export default Test2;