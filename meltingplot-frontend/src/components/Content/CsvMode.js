import React from "react";

import {Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';
function CsvMode(props) {
    const [mode, setMode] = React.useState(false);
    const [columns, setColumns] = React.useState([]);

    const getMode = () => {
        fetch(`${window.location.origin}/api/csv/?project_id=${props.projectId}`, {
            method: "GET"
        }).then((response) => response.json().then((data) => ({status: response.status, body: data})))
            .then((obj) => {
                if (obj.status === 200){
                    setMode(true);
                    setColumns(obj.body.data);
                }
                else{
                    setMode(false);
                }
            }
            )
            .catch((error) =>{
                setMode(false);
            }
        )
    }
    React.useEffect(() => {
        if (props.projectId !== undefined){
          getMode()
        }
        else{
          setMode(false);
        }
      }, [props.csvUpload]);

        // Verify graph fetch has not encountered an error
    if (mode !== true) {
        return (
            <>
            <Card>
                <CardBody>
                <CardTitle>Interactive Mode</CardTitle>
                <CardSubtitle>For x data, y data try out:</CardSubtitle>
                <ul>
                    <li>
                        np.arange(0,5,0.2), np.sin(np.arange(0,5,0.2))
                    </li>
                    <li>
                        [0,1,2,3], [0,3,6,9]
                    </li>
                    <li>
                        etc.
                    </li>
                </ul>
                </CardBody>
            </Card>
            </>
        );
    } else {
        return (
            <>
                <Card>
                <CardBody>
                <CardTitle>CSV Mode</CardTitle>
                <CardSubtitle>columns in provided csv</CardSubtitle>
                <ul>
                    {columns.map((x) => {
                        return(
                        <li>
                            {x}
                        </li>)
                    })}
                </ul>
                </CardBody>
            </Card>
            </>
        )
    }
}


export default CsvMode;