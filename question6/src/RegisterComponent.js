import React from 'react'

class RegisterComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <h2>Registration Form</h2>

                <form className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter First Name : </label>
                                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter Last Name : </label>
                                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter User Name : </label>
                                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="User Name"></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                            <label >Enter Password : </label>
                                <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-info btn-block"></input>
                            </div>
                        </div>
                    </div>

                    

                </form>
            </div>
        )
    }
}

export default RegisterComponent;