import './RedText.css';

interface RedTextProps
{
	children: string
}

export default function RedText({ children }: RedTextProps)
{
	return <div className="red-text">{children}</div>
}
