import React from "react";

import { Button } from "reactstrap";

import loadingCircle from "../../assets/img/LoadingCircle.gif";
import reactstrapCjs from "reactstrap";

function GraphDisplay(props) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [graph, setGraph] = React.useState(null);
    const [firstTime, setFirstTime] = React.useState(true);

    const generateGraph = () => {
        // Make fetch request
        setFirstTime(false);
        setIsLoaded(false);
        setError(null);
        let url = `${window.location.origin}/api/graph?config=${JSON.stringify(props.config)}`
        if (props.project_id !== undefined){
            url = url +`&project_id=${props.project_id}`
        }
        fetch(url, {
            method: "GET"
        })
        .then((response) => {
            if (response.status === 200) {
                return response.blob();
            }
            else{
                response.json().then(text => { throw new Error(text.message) }).catch(error => {
                    setIsLoaded(true);
                    setError(error.message);
                  })
            } 
        })
        .then(
            (imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setIsLoaded(true);
                setGraph(imageObjectURL);
            }, 
        ) 
        .catch(error => {
            setIsLoaded(true);
            setError(error.message)
          })    
    }
    
        // Verify graph fetch has not encountered an error
    if (error != null) {
        return (
            <>
            <div>
                Click "Generate" to display your graph!
                <Button color="success" onClick={generateGraph}>Generate</Button>
            </div>
            <div>
                Error: {error}
            </div>
            </>
        );
    } else {
        // Verify that graph fetch has been called at least once
        if (firstTime) {
            return (
                <div>
                    Click "Generate" to display your graph!
                    <Button color="success" onClick={generateGraph}>Generate</Button>
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
                        <Button color="success" onClick={generateGraph}>Generate</Button>
                    </div>
                );
            }
        }
    }
}


export default GraphDisplay;