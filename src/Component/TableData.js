import React, { Component } from 'react';
import RowDataTable from './RowDataTable';

class TableData extends Component {

    mappingDataUser = () => (this.props.dataUserProps.map((value, key) => (
        <RowDataTable key = {key} stt = {key} suathongtinUser={(userData)=>this.props.suathongtinUser(value)} username = {value.username} phone = {value.phone} permission = {value.permission}
        xoathongtinUser={(userData)=>this.props.xoathongtinUser(value)} />
    )))
    render() {
        return (
            
                <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Permission</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                    </tbody>
                </table>
                </div>
        );
    }
}

export default TableData;