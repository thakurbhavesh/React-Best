import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("Start typing here...");
  const editorRef = useRef(null);

  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    // Focus back on the editor after applying the command
    editorRef.current.focus();
  };

  // Force LTR direction on component mount
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.style.direction = "ltr";
      editorRef.current.style.textAlign = "left";
    }
  }, []);

  return (
    <div className="App">
      <div className="editor-container">
        {/* Toolbar */}
        <div className="toolbar">
          <button onClick={() => formatText("bold")}><b>B</b></button>
          <button onClick={() => formatText("italic")}><i>I</i></button>
          <button onClick={() => formatText("underline")}><u>U</u></button>
          <button onClick={() => formatText("strikeThrough")}><s>S</s></button>
          <button onClick={() => formatText("justifyLeft")}>&#x21E4;</button>
          <button onClick={() => formatText("justifyCenter")}>&#x21E5;</button>
          <button onClick={() => formatText("justifyRight")}>&#x21E6;</button>
          <button onClick={() => formatText("insertUnorderedList")}>&#x2022;</button>
          <button onClick={() => formatText("insertOrderedList")}>1.</button>
        </div>

        {/* Editable Area */}
        <div
          id="editor"
          contentEditable={true}
          className="editable-area"
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: content }}
          ref={editorRef}
          dir="ltr" 
        ></div>
      </div>
    </div>
  );
}

export default App;
