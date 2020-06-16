import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue : ''
        }
    }
    
    hienthinut = () => {
        if(this.props.hienthiForm === true){
            return (           
                <div className="col-4">                 
                    <div className="btn btn-danger" onClick={()=>this.props.ketnoi()}>Close </div>
                </div>
            );
        }else{
            return (
                <div className="col-4">
                    <div className="btn btn-info" onClick={()=>this.props.ketnoi()}>Add </div>
                </div>
            );
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue : event.target.value
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <div className="group">
                            <input type="text" onChange = {(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Key search" />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className=" btn btn-info" onClick={(keySearch) => this.props.timkiem(this.state.tempValue)} >Search</div>  
                </div>
                {this.hienthinut()}
            </div>
        );
    }
}

export default Search;