import React from "react";
import { Link } from "react-router-dom";

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

const PageFooter = ({}) => {
  return (
    <div>
      <SubChat />
      <div className="footerDiv">
        <div className="container">
          <p>Sample project by EruliaF</p>
        </div>
      </div>
    </div>
  );
};

const SubChat = ({}) => {
  return (
    <div className="container chatContainer">
      <div className="miniChatMainWrapper">
        <div className="miniChatSubWrapper">
          <div className="miniChatHeader">
            <img
              src="http://localhost:3000/api/user/profile-image/5c279d36ba65291e40e1ad5a"
              className="personImage"
            />
            <span className="personName">Nisal Madusanka</span>
            <i class="far fa-times-circle closeIcon" />
          </div>

          <div className="miniChatBodyWrapper">
            <div className="miniChatBody miniChatBodyActive">
              <div className="media">
                <img
                  src="http://localhost:3000/api/user/profile-image/5c279d36ba65291e40e1ad5a"
                  className="align-self-end mr-2 chatUserPic"
                />
                <div className="media-body chatMessage">
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. faucibus.
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-body chatMessage ownMessage">
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.  	&#128077;
                  </p>
                </div>
                <img
                  src="http://localhost:3000/api/user/profile-image/5c279d36ba65291e40e1ad5a"
                  className="align-self-end ml-3 chatUserPic"
                />
              </div>
            </div>

            <div className="miniChatFooter">
              <div className="inputWapper">
                <textarea
                  type={"text"}
                  className={"div100"}
                  name={"chatMsg"}
                  id={"chatMsg"}
                  value={""}
                />
              </div>
              <div className="iconWrpper">
                <i class="far fa-images ileft" />
                <i class="fas fa-camera ileft" />
                <i class="fas fa-video ileft" />

                {/* <i class="fas fa-thumbs-up iright"></i> */}
                <i class="fas fa-paper-plane iright" />
              </div>
            </div>
          </div>
          
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
  PageFooter,
  SubChat
};
