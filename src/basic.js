import React , {Component} from 'react';
import TopHeader from './Header';
class Home extends Component{

    render(){
        return(
            <>
    <TopHeader/>
    <div className="container mt-4">
    <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <h3 className="text-primary text-center  mb-2">Update Basic Information</h3>
            <div className="card">
                <div className="card-header bg-primary text-white">Enter details bellow</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control"/>
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
export default Home;