import React , {Component} from "react";
import {Button} from "./CommonElements";
import {uniqBy} from "lodash";

class AttachFiles extends Component {

    static defaultProps = {
        inputDisplayName:"Upload Image",
        inputName:"images",
        inputValue:{attachFiles:[],availableList:[]},
        errorTxt:""
    }

    constructor() {
        super();
        this.state={
            show:{}
        }
        this.fileBrowser = React.createRef();
    }

    handleMouseOver=(key)=>{
        this.setState({
            show:{
                ...this.state.show,
                [key]:!this.state.show[key]
            }
        });
    }


    generateFileName = (name) => {
        if (name.length > 23) {
            return name.slice(0, 11) + "..." + name.slice(-11);
        } else {
            return name;
        }
    }

    onSelectFiles=(event)=>{
        let {inputName,inputValue,onChangeFile}=this.props;
        if(event.target.files){ 
            let files=event.target.files;
            let oldList=inputValue.attachFiles||[];
            for (let key in files) { 
                let currentFile=files.item(key);                  
                oldList.push(currentFile);  
                inputValue["attachFiles"]=uniqBy(oldList,file => JSON.stringify([file.name, file.size]));                
            }           
            onChangeFile(inputName,inputValue);
        }
    }

    render() {

        let {inputDisplayName,inputName,inputValue,errorTxt}=this.props;
        
        return (
            <div className="div100 float-left fileUploderWrapper">
                <p className="div100 float-left">{inputDisplayName}</p>

                <div className="div100 float-left">

                    {/* <div className="imageWrapper">
                    <img 
                        src="https://www.gstatic.com/webp/gallery/4.jpg" 
                        className="image" 
                        onMouseEnter={()=>this.handleMouseOver(0)}
                        onMouseLeave={()=>this.handleMouseOver(0)}
                    />
                    
                    {
                     (this.state.show[0]==true)?
                        (
                        <div className="removeIconWrapper">
                        <i className="far fa-trash-alt removeIcon"></i> 
                        </div> 
                        ):(null)
                    }                                                        
                </div> */}


                    {
                        (inputValue.attachFiles||[]).map((file,i)=>{                 
                            return (
                                <div className="newUpload" key={i}>
                                    <p>
                                        <span className="textSpan">
                                            {this.generateFileName(file.name)}
                                        </span>
                                        <span className="iconSpan">
                                            <i className="far fa-times-circle"></i>
                                        </span>
                                    </p>
                                </div>
                            )
                        })
                    }
                    



                    <div className="fileUploder">
                        <i className="fas fa-cloud-upload-alt text-primary"></i>
                        <Button
                            buttonTxt="Choose File"
                            onClickBtn={() => this.fileBrowser.current.click()}
                        />
                    </div>

                    {/* <div className="fileUploder pt-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p>Uploading....</p>
                </div> */}

                    <input
                        type="file"
                        name="attachFiles"
                        hidden
                        multiple
                        ref={this.fileBrowser}
                        onChange={this.onSelectFiles}
                    />
                </div>
                <p className="div100 float-left">{errorTxt}</p>
            </div>
        )
    }

}

export default AttachFiles;