import React from "react";
import { Link } from "react-router-dom";
import {SubChat} from "../chat/CommonElements";

const emptyFun = () => undefined;

const Breadcrumb = props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {React.Children.map(props.children, (child, i) => {
          return (
            <li className={`breadcrumb-item`} aria-current="page">
              <Link to={child.props.urlTo}>{child.props.displayName}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const PageFullLoader = ({ status = true, type = null }) => {
  return (
    <div>
      {status ? (
        <div className="pageLoader">
          <div className="loader spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const ModelHeader = ({
  title = "",
  elementCss = "",
  buttonCss = "",
  onClickBtn = emptyFun
}) => {
  return (
    <div className={`modal-header ${elementCss}`}>
      <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className={`close ${buttonCss}`}
        onClick={() => onClickBtn()}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const ModelBody = ({ elementCss = "", children = null }) => {
  return <div className={`modal-body ${elementCss}`}>{children}</div>;
};

const ModelFooter = ({ elementCss = "", children = null }) => {
  return <div className={`modal-footer ${elementCss}`}>{children}</div>;
};

const ModelWrapper = ({
  modelType = "lg",
  children = null,
  displayStatus = false
}) => {
  return (
    <div
      className={`modal fade bd-example-modal-${modelType} ${
        displayStatus ? " show" : ""
      }`}
    >
      <div className={`modal-dialog modal-${modelType} `}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

const PageFooter = ({
  modelInitData={},
  chatActions={},
  currentChatMessage="",
  messageList=[],
  authUserID=null,
  onChat=emptyFun
}) => {
 
  return (
    <div>
      {
        (modelInitData.status==true)?(
          <SubChat 
            modelInitData={modelInitData}
            chatActions={chatActions}
            currentChatMessage={currentChatMessage}
            onChat={onChat}
            messageList={messageList}
            authUserID={authUserID}
          />
        ):(null)
      }
      
      <div className="footerDiv">
        <div className="container">
          <p>Sample project by EruliaF</p>
          
        </div>
      </div>
    </div>
  );
};



export {
  Breadcrumb,
  PageFullLoader,
  ModelHeader,
  ModelBody,
  ModelFooter,
  ModelWrapper,
  PageFooter
};
