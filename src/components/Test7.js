import React, { useState, useCallback } from 'react';
import Test7Count from './Test7Count';
import Test7Title from './Test7Title';

const Test7 = () => {
  const [age, setAge] = useState(20)
  const [money, setMoney] = useState(2000)
  const [year, setYear] = useState(10)

  const onAge = useCallback( () => {
    setAge(age + 1)
  }, [age])
  const onMoney = useCallback( () => {
    setMoney(money + 50)
  }, [money])
  const onYear = useCallback( () => {
    setYear(year + 1)
  }, [year])
  
  return (
    <div>-
      <Test7Title />

      <Test7Count text="나이" count={age}/>
      <button onClick={onAge}>나이증가</button>
      <hr/>
      <Test7Count text="급여" count={money}/>
      <button onClick={onMoney}>급여증가</button>
      <hr/>
      <Test7Count text="연차" count={year}/>
      <button onClick={onYear}>연도증가</button>
      <hr/>
    </div>
  );
};

export default Test7;