import React, { Component } from 'react';

class RowDataTable extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            
                <tr>
                        <td>{this.props.stt}</td>
                        <td>{this.props.username}</td>
                        <td>{this.props.phone}</td>
                        <td>{this.props.permission}</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua" onClick={()=>this.props.suathongtinUser()}>
                            <i className="fa fa-edit    "> Sửa</i>
                            </div>
                            <div className="btn btn-danger xoa" onClick={()=>this.props.xoathongtinUser()}>
                            <i className="fa fa-delete    "> Xóa</i>
                            </div>
                        </div>
                        </td>
                </tr>
            
        );
    }
}

export default RowDataTable;