
function Advice(props){

    // const [advice, setAdvice] = useState(null);
    // const [id, setID] = useState(null);

    // useEffect(()=>{
    //     fetch(`https://api.adviceslip.com/advice`)
    //     .then((response)=>{
    //         if(!response.ok){
    //             throw new Error(
    //                 `This is an HTTP error: The status is ${response.status}`
    //             );
    //         }
    //         return response.json();
    //     })
    //     .then((actualData)=>{
    //         setAdvice(actualData.slip.advice);
    //         setID(actualData.slip.id);
    //         })
    //     .catch((error)=>console.log(error.message));
    // },[]);

    return <div className="App">{"#"+props.id+": "+props.advice}</div>;
}

export default Advice;