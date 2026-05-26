import { useState } from 'react';

const State = function () {
	const [first, setfirst] = useState(0);
	return <h4>state management: state is {first}</h4>;
};

export default State;


const State2 = function(){
  const [count, setCount] = useState(0);

  return (
    <button onClick={()=> }>{count}</button>
  )
}