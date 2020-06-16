import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username : "",
            phone : "",
            permission : ""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        })

        //đóng gói thành 1 đối tượng
        var item = {};
        item.id = this.state.id;
        item.username = this.state.username;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
    }
    kiemtratrangthai = () => {
        if(this.props.hienthiForm === true){
            return (
                
                    <div className="card text-left">
                        <div className="card border-primary mb-3">
                        <div className="card-body text-primary">
                            <h4 className="card-title">Add user</h4>
                            <div className="form-group">
                            <input type="text" name="username" onChange={(event)=> this.isChange(event)} className="form-control" placeholder="Name" />
                            <input type="text" name="phone" onChange={(event)=> this.isChange(event)} className="form-control" placeholder="Phone" />
                            <select name="permission" onChange={(event)=> this.isChange(event)} className="form-control" >
                                <option>Choose ... </option>
                                <option value='Admin'>Admin </option>
                                <option value='Modrator'>Modrator</option>
                                <option value='Normal'>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <div className="btn btn-block btn-primary" onClick={(username, phone, permission)=>this.props.themmoi(this.state.username, this.state.phone, this.state.permission)}>Add</div>
                            </div>
                        </div>
                        </div>
                    </div> 
                 
            )
        }
    }
    render() {
        
        return (
            <div className="col-3">
                {this.kiemtratrangthai()}
            </div>
        );
    }
}

export default AddUser;