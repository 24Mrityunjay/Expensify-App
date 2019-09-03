import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) =>(
        <div>
            <p>This is the private info. Please, don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    )
};
const requireAuthentication = () => {
    return (props) => (
            props.isAuthenticated === true ? 
            <AdminInfo {...props}/> : "Please provide Authentication"
            
    )
   
};
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info = "sdf" />, document.getElementById('app'));

//ReactDOM.render(<AdminInfo info = "sdf" />, document.getElementById('app'));