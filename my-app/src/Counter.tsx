import { useState, useEffect } from 'react';

export default function Counter()
{
	const [count1, setCount1] = useState(0);
	useEffect(() =>
	{
		console.info("b")
		document.title = "Count: " + count1;
	}, [count1]);
	return <div>
		{count1}
		<button onClick={() => setCount1(prevCount => prevCount + 1)}>Add</button>
	</div>
}