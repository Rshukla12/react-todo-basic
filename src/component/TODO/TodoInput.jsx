import { useState } from "react";

export default function TodoInput ( { onTaskCreate } ){
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText( e.target.value )
  }
  const handleClick = () => {
    onTaskCreate(text);
  }
  return (
    <div>
      <input type="text" placeholder="Add Something" value={text} onChange={handleChange} />
      <button onClick={handleClick}> ADD</button>
    </div>
  )
}