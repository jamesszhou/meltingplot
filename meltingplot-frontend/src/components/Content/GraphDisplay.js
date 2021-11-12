import React from "react";

import loadingCircle from "../../assets/img/LoadingCircle.gif";



function GraphDisplay(props) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [graph, setGraph] = React.useState(null);
    
    const generateGraph = () => {
        console.log(props.config)
        // Make fetch request
        fetch(`http://localhost:5000/api/graph?config=${JSON.stringify(props.config)}`, {
            method: "GET"
        })
        .then(response => response.blob())
        .then(
            (imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob)
                setIsLoaded(true);
                setGraph(imageObjectURL);
            },      
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }
    
        // Verify graph fetch has not encountered an error
    if (error) {
        return (
            <div>
                Error: {error.message}
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