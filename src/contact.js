import React , {Component} from 'react';
import TopHeader from './Header';
class Contact extends Component{

    render(){
        return(
            <>
    <TopHeader/>
    <div className="container mt-4">
    <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <h3 className="text-primary text-center mb-2">Update Contact Information</h3>
            <div className="card">
                <div className="card-header bg-success text-white">Enter details bellow</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email ID</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>City Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary">Update Now</button>
                </div>
            </div>
        </div>
        <div className="col-lg-3"></div>
    </div>
</div>
</>
        )
    }
}
export default Contact;