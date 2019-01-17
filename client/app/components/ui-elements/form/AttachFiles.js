import React , {Component} from "react";
import {Button} from "./CommonElements"

class AttachFiles extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="div100 float-left">



                <Button
                    buttonTxt="Add New Image"                
                />
            </div>
        )
    }

}

export default AttachFiles;