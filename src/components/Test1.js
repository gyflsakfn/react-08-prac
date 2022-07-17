import React, {useState, useMemo} from 'react';

const Test1 = () => {
  const [ cnt1, setCnt1] = useState(1)
  const [ cnt2, setCnt2] = useState(2)

  // 사용자 정의 함수를 만들어서 return 처리할 경우 (return값을 기억)
  const isEven = useMemo(() => {
    console.log('test')
    console.log(cnt1)
    return cnt1 % 2 === 0
  }, [cnt1])

  return (
    <div>
      <h2> 카운트 : {cnt1}</h2>
      <button onClick={() => setCnt1(cnt1 + 1)}>증가</button>

      <h2> 카운트 : {cnt2}</h2>
      <button onClick={() => setCnt2(cnt2 + 1)}>증가</button>

      <hr/>
      <h2>
        결과 : { isEven ? '짝수' : '홀수' }
      </h2>
    </div>
  );
};

export default Test1;

/*
useMemo : 메모이제이션된 값을 반환합니다.
useMemo : 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 

useMemo : 값을 기억한다. 함수의 return값을 기억한다.
          사용자 정의 함수로 잘 쓰기 쉽지 않다.
          context(상태관리)에서 사용한다.
          

useMemo( 콜백함수, [의존성])
useMemo( () => {} ,[])
useMemo( () => {} ,[바뀌는 값])

useCallback : 함수 자체를 기억한다.
useCallback( 콜백함수, [의존성])
useCallback( () => {}, [])
useCallback( () => {}, [바뀌는 값])

“생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. 
이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요. 
통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 하지 마세요. 
예를 들어, 사이드 이펙트(side effects)는 
useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.
*/