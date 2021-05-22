import React , {Component} from 'react';
import {Link} from 'react-router-dom';
class Login extends Component{

    constructor(){
        super();
        this.state={
            email:"",
            pass:"",
            message:""
        }
    }

    render(){
        return(
            <div className="container">
			<div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <i className="fa fa-lock"></i> <b> Login </b>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>E-Mail ID</label>
                            <input type="email" className="form-control" placeholder="Enter Your e-Mail id"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password"/>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary">Login <i className="fa fa-arrow-right"></i> </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-12 mt-3">
                <p className="text-center">
                   <Link to="/"> I am New User , Want to Register</Link> 
                </p>
            </div>
        </div>
        </div>
        )
    }
}
export default Login;