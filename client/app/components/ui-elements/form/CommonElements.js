import React from 'react';

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

const Button=({
    wrapperCss="div100",
    buttonCss="btn-primary btn-sm",
    buttonTxt="",
    onClickBtn=emptyFun,
})=>{
    return(
        <div className={wrapperCss}>
         <button 
            type="button" 
            className={`btn ${buttonCss}`} 
            onClick={(event)=>onClickBtn(event)}>{buttonTxt}</button>
        </div>       
    );
}


export {
    DefaultFormWRapper,
    InputBox,
    Button
}