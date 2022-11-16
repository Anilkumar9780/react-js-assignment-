/* eslint-disable jsx-a11y/alt-text */
// import React, { useRef } from 'react';
// import ReactEmojiTextArea from "@nikaera/react-emoji-textarea";

// export const App = () => {
//   const textAreaEl = useRef();

//   return (
//     <div>
//       <ReactEmojiTextArea
//         style={{ fontSize: "1em" }}
//         ref={textAreaEl}
//         onChange={(text) =>(text)}
//         placeholder={"What is your post about?"}
//       />
//     </div>
//   )
// }


import { useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Badge from 'react-bootstrap/Badge';

function App() {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [characterLimit] = useState(250);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const handleSubmit = () => {
    console.log(input);
    setInput("");
  }

  return (
    <div className="app">
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          style={{ width: "500px", height: "200px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          isInvalid={(input.length > characterLimit)}
          type="text"
          placeholder="What is your post about?"
        />
        <button
          style={{ marginTop: "-20px", marginLeft: "-110px", }}
          className="btn btn-outline-white"
          onClick={() => setShowEmojis(!showEmojis)}
        >
          🙂
        </button>
        <Badge className="mt-5" bg={`${input.length > characterLimit ? 'danger' : 'primary'}`} >
          {input.length}/{characterLimit}
        </Badge>
        {showEmojis && (
          <div>
            <Picker onSelect={addEmoji} />
          </div>
        )}
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
// What is your post about?
