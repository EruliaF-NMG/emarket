import React from 'react';
import {Link} from "react-router-dom";
import {getValue} from "../../../helpers/common/CommonMethods";

const emptyFun = () => undefined;

const DefaultFormWRapper = ({
    children = null,
    wrapperCss="div100",
    inputID="",
    inputDisplayName="",
    errorTxt=""
}) => {
    return (
        <div className={`form-group ${wrapperCss}`}>
            <label htmlFor={inputID}>{inputDisplayName}</label>
            {children}
            <small className="form-text text-danger">{errorTxt}</small>
        </div>
    )
}


const InputBox = ({
    wrapperCss="div100",
    inputID="",
    inputDisplayName="",
    inputName="",
    inputPlaceholder="",
    inputCss="",
    inputType="",
    inputValue="",
    onChangeTxt=emptyFun,
    errorTxt=""
}) => {
    return (
            <DefaultFormWRapper
                wrapperCss={wrapperCss}
                inputID={inputID}
                inputDisplayName={inputDisplayName}
                errorTxt={errorTxt}
            >
              <input 
                type={inputType} 
                className={`form-control div100 ${inputCss}`} 
                name={inputName} 
                id={inputID} 
                value={inputValue}
                placeholder={inputPlaceholder} 
                onChange={(event)=>onChangeTxt({name:event.target.name,value:event.target.value,event:event})}
              />
            </DefaultFormWRapper>        
            
    )
}


const FileInput = ({
    wrapperCss="div100",
    inputID="",
    inputDisplayName="",
    inputName="",
    inputPlaceholder="",
    inputCss="",
    inputValue="",
    onChangeTxt=emptyFun,
    errorTxt=""
}) => {
    return (
            <DefaultFormWRapper
                wrapperCss={wrapperCss}
                inputID={inputID}
                inputDisplayName={inputDisplayName}
                errorTxt={errorTxt}
            >
              <input 
                type={"file"} 
                className={`form-control div100 ${inputCss}`} 
                name={inputName} 
                id={inputID} 
                onChange={(event)=>onChangeTxt({name:event.target.name,value:event.target.files[0],event:event})}
              />
            </DefaultFormWRapper>        
            
    )
}

const InputTextArea = ({
    wrapperCss="div100",
    inputID="",
    inputDisplayName="",
    inputName="",
    inputPlaceholder="",
    inputCss="",
    inputType="",
    inputValue="",
    onChangeTxt=emptyFun,
    errorTxt=""
}) => {
    return (
            <DefaultFormWRapper
                wrapperCss={wrapperCss}
                inputID={inputID}
                inputDisplayName={inputDisplayName}
                errorTxt={errorTxt}
            >
              <textarea 
                type={inputType} 
                className={`form-control div100 ${inputCss}`} 
                name={inputName} 
                id={inputID} 
                value={inputValue}
                placeholder={inputPlaceholder} 
                onChange={(event)=>onChangeTxt({name:event.target.name,value:event.target.value,event:event})}
              >
              {inputValue}
              </textarea>
            </DefaultFormWRapper>        
            
    )
}

const HtmlButton=({
    buttonCss="btn-primary btn-sm",
    buttonTxt="",
    onClickBtn=emptyFun,
})=>{
    return(
        <button 
            type="button" 
            className={`btn ${buttonCss}`} 
            onClick={(event)=>onClickBtn(event)}>{buttonTxt}
        </button>
    )
}

const Button=({
    wrapperCss="div100",
    buttonCss="btn-primary btn-sm",
    buttonTxt="",
    onClickBtn=emptyFun,
})=>{
    return(
        <div className={wrapperCss}>
         <HtmlButton
            buttonCss={buttonCss}
            buttonTxt={buttonTxt}
            onClickBtn={onClickBtn}
         />
        </div>       
    );
}

const LinkButton=({
    wrapperCss="div100",
    buttonCss="btn-primary btn-sm",
    buttonTxt="",
    url=""
})=>{
    return(
        <Link className={wrapperCss} to={url}>
            <HtmlButton
                buttonCss={buttonCss}
                buttonTxt={buttonTxt}
            />
        </Link>       
    );
}



const CheckBox = ({
    inputwrapperCss="div100",
    inputID="",
    inputDisplayName="",
    inputName="",
    inputCss="",
    inputValue=true,
    onChangeItem=emptyFun,
    errorTxt=""
}) => {
    return (
        <div className={`form-check ${inputwrapperCss}`}>
        <input 
            className={`form-check-input ${inputCss}`} 
            type="checkbox" 
            checked={inputValue}
            name={inputName}
            id={inputID} 
            onChange={(event)=>onChangeItem({name:event.target.name,value:!inputValue,event:event})}
        />
        <label className="form-check-label" htmlFor={inputID} >
           {inputDisplayName}
        </label>
        </div>      
    )
}


const SelectBox = ({
    wrapperCss="div100",
    inputID="",
    inputDisplayName="",
    inputName="",
    inputPlaceholder="",
    inputCss="",
    inputValue="",
    itemList=[],
    displayKey="_id",
    displayInfoKey="name",
    onChangeItem=emptyFun,
    errorTxt=""
}) => {
    return (
            <DefaultFormWRapper
                wrapperCss={wrapperCss}
                inputID={inputID}
                inputDisplayName={inputDisplayName}
                errorTxt={errorTxt}
            >
              <select 
                className={`form-control div100 ${inputCss}`} 
                name={inputName} 
                id={inputID} 
                value={inputValue}
                onChange={(event)=>onChangeItem({name:event.target.name,value:event.target.value,event:event})}
              >
              {
                  (itemList).map((item,key)=>{
                    return(
                    <option 
                        key={key}
                        value={item[displayKey]}
                    >
                    {item[displayInfoKey]}
                    </option>
                    )
                  })
              }
              </select>
            </DefaultFormWRapper>        
            
    )
}


export {
    DefaultFormWRapper,
    InputBox,
    Button,
    CheckBox,
    HtmlButton,
    LinkButton,
    InputTextArea,
    FileInput,
    SelectBox
}