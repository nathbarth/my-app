import React,{useState} from "react";
function Titre (props){
    return (
        <div>
               <h1>{props.text}</h1>
        <button onClick={()=> props.setText("ok")}>Switch</button>
        </div>
     
    )
}

function Test (){
    const [text,setText] = useState("Hello World");
    return (
        <div>
        <h1>Composant Test</h1>
            <Titre text={text} setText={setText} />
        </div>
    )
}

export default Test