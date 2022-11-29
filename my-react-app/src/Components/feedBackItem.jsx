import React from 'react'
//import { useState } from 'react';
import Card from './shared/Card';



function feedBackItem({item}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item');

//   const handleClick = () => {
//     setRating((prev) => {
//       console.log(prev);
//       return prev + 1
//    })
//  }

  return (
    <Card>
    
          <div className="num-display">{item.rating}</div>
      <div className="tex-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
      
      
      </Card>
  )
}

export default feedBackItem;