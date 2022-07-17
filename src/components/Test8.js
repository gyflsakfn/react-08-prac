import React, {useReducer} from 'react';

// 초기값
const initialState = 0
// 함수 안에 분기형 switch~case 반드시 default 꼭 있어야한다.
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state -1
    case 'RESET':
      return 0
    default:
      return state
  }
}
const Test8 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={() => dispatch({type:'INCREMENT'})}>증가 Increment</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>감소 DECREMENT</button>
      <button onClick={() => dispatch({type:'RESET'})}>초기화 RESET</button>
    </div>
  );
};

export default Test8;

/*
  별명: 분기형 ? 대문자로 작성한다 : type 필수
        증가 : INCREMENT
        감소 : DECREMENT
        초기화 : RESET
*/