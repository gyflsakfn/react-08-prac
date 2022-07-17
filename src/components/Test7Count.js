import React from 'react';

const Test7Count = ({text, count}) => {
  console.log(text, count)
  return (
    <div>
      <h2>{text} / {count}</h2>
    </div>
  );
};

export default React.memo(Test7Count);