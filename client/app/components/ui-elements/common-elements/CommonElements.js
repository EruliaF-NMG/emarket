import React from "react";
import { Link } from 'react-router-dom';

const Breadcrumb=(props)=>{
    return(
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {
              React.Children.map(props.children, (child, i) => {                  
                return (
                    <li className={`breadcrumb-item`} aria-current="page">                    
                     <Link to={child.props.urlTo}>{child.props.displayName}</Link> 
                    </li>
                )
              })
            }
          </ol>
        </nav>
    );
}


const PageFullLoader = ({
  status = true,
  type = null,
}) => {
  return (
      <div>
          {
              (status) ? (
                  <div className="pageLoader">                      
                        <div className="loader spinner-border text-warning" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>                      
                  </div>
              ) : (null)
          }
      </div>
  );
}


export {
    Breadcrumb,
    PageFullLoader
}