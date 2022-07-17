//rscm
import React, { memo } from 'react';

const Test6Sub = memo(({text, cnt}) => {
  console.log(text, cnt)
    return (
      <div style={{border: '1px solid #000', padding: 20, fontSize:25,
      margin:30}}>
        출력 : {text} / {cnt}
      </div>
  );
});

export default Test6Sub;

// import React from 'react';

// const Test6Sub = ({text, cnt}) => {
//   console.log(text, cnt)
//   return (
//     <div style={{border: '1px solid #000', padding: 20, fontSize:25,
//     margin:30}}>
//       출력 : {text} / {cnt}
//     </div>
//   );
// };

// export default React.memo(Test6Sub);