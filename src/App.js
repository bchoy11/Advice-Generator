import {useState} from "react";
import Advice from "./Advice";

function App(){

    const [advice, setAdvice] = useState(null);
    const [id, setID] = useState(null);

    function getAdvice(){
        fetch(`https://api.adviceslip.com/advice`)
        .then((response)=>{
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((actualData)=>{
            setAdvice(actualData.slip.advice);
            setID(actualData.slip.id);
            })
        .catch((error)=>console.log(error.message));
    }

    getAdvice();

    return(
    <div className="advice-container">
        <h3><Advice id={id} advice={advice}/></h3>
        <button className="refresh-button" onClick={getAdvice}><span>Button</span></button>
    </div>
    );
}

export default App;
