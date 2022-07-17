import React, {useMemo} from 'react';

const getColor = (color) => {
  console.log('getColor')
  switch(color) {
    case 'pink' : return '분홍색 입니다.';
    case 'pink' : return '진분홍색 입니다.';
    case 'pink' : return '파랑색 입니다.';
    case 'pink' : return '빨간색 입니다.';
    case 'pink' : return '노란색 입니다.';
    default: return '다시 선택하세요.'
  }
}
const getFood = (food) => {
  console.log('getFood')
  switch(food) {
    case '갈비' : return '갈비에 대한 설명입니다.';
    case '불고기' : return '불고기에 대한 설명입니다.';
    case '김밥' : return '김밥에 대한 설명입니다.';
    case '라면' : return '라면에 대한 설명입니다.';
  }
}


const Test3Sub = ({color, food}) => {
  const colorInfo = useMemo(() => {
    return getColor(color)
  }, [color])

  const foodInfo = useMemo(() => getFood(food), [food])
  return (
    <div>
      <h3>선택한 색 : {color}</h3>
      <h3>색의 설명 : {colorInfo}</h3>

      <h3>선택한 음식 : {food}</h3>
      <h3>음식의 설명 : {foodInfo}</h3>
    </div>
  );
};

export default Test3Sub;