import React from "react";

import loadingCircle from "../../assets/img/LoadingCircle.gif";

class GraphDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            
            url: process.env.DATABASE_URL,
            config: props.config,

            error: null,
            graph: null
        };

        // Bind function to the class
        this.generateGraph = this.generateGraph.bind(this);
    }

    generateGraph() {
        // Make fetch request
        fetch(this.url, {
            method: "POST",
            body: this.state.config,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            (response) => {
                let jsonResponse = JSON.parse(response.json);
                this.setState({
                    fetched: true,
                    isLoaded: true,
                    graph: jsonResponse.img
                })
            },
            (error) => {
                this.setState({
                    fetched: true,
                    isLoaded: true,
                    error
                })
            }
        );   
    }

    render() {
        const { isLoaded, error, graph } = this.state;

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
                        <button onClick={this.generateGraph}>Generate</button>
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
                            <button onClick={this.generateGraph}>Generate</button>
                        </div>
                    );
                }
            }
        }
    }
}

export default GraphDisplay;