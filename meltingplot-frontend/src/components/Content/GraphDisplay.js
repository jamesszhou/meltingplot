import React from "react";

import loadingCircle from "../../assets/img/LoadingCircle.gif";



function GraphDisplay(props) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [graph, setGraph] = React.useState(null);
    
    const generateGraph = () => {
        // Make fetch request
        fetch(`${window.location.origin}/api/graph?config=${JSON.stringify(props.config)}`, {
            method: "GET",
            redirect: 'follow'
        })
        .then((response) => {
            if (response.status == 200) {
                console.log("status is lit")
                return response.blob()
            }
            else{
                console.log("bad status")
                setIsLoaded(true);
                setError(response.message);
                return
            } 
        })
        .then(
            (imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob)
                setIsLoaded(true);
                setGraph(imageObjectURL);
            }, 
        )     
    }
    
        // Verify graph fetch has not encountered an error
    if (error) {
        return (
            <div>
                Error: {error}
            </div>
        );
    } else {
        // Verify that graph fetch has been called at least once
        if (!graph) {
            return (
                <div>
                    Click "Generate" to display your graph!
                    <button onClick={generateGraph}>Generate</button>
                </div>
            );
        } else {
            // Verify that graph fetch has completed
            if (!isLoaded) {
                return (
                    <div>
                        <img src={loadingCircle} alt=""></img>
                    </div>
                );
            } else {
                return (
                    <div>
                        <img src={graph} alt=""></img>
                        <button onClick={generateGraph}>Generate</button>
                    </div>
                );
            }
        }
    }
}


export default GraphDisplay;