import React , {Component} from 'react';
import TopHeader from './header';
class Education extends Component{

    render(){
        return(
            <>
    <TopHeader/>
    <div className="container mt-4">
    <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <h3 className="text-primary text-center mb-2">Update Education Information</h3>
            <div className="card">
                <div className="card-header bg-success text-white">Enter details bellow</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Higher Education</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Passing Years</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Marks %</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>College / University Name & Address</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-warning">Update Education</button>
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
export default Education;