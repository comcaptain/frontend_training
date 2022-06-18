import { useDebugValue, useEffect, useRef, useState } from "react";


export default function Clock()
{
	const time = useLiveTime(500);
	return <span>{time.toLocaleTimeString()}<Example /></span>
}

function useLiveTime(updateInterval: number)
{
	const [time, setTime] = useState(new Date());
	const testRef = useRef(0);
	useEffect(() =>
	{
		const handle = setInterval(() => setTime(new Date()), updateInterval);
		testRef.current = testRef.current + 1;
		return () => clearInterval(handle);
	}, [setTime, updateInterval]);
	useDebugValue("Tony" + time);
	return time;
}

function Example() {
	const [count, setCount] = useState(0);
  
	function handleAlertClick() {
	  setTimeout(() => {
		alert('You clicked on: ' + count);
	  }, 3000);
	}
  
	return (
	  <div>
		<p>You clicked {count} times</p>
		<button onClick={() => setCount(count + 1)}>
		  Click me
		</button>
		<button onClick={handleAlertClick}>
		  Show alert
		</button>
	  </div>
	);
  }

