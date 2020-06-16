import React, { Component } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import TableData from './TableData.js';
import AddUser from './AddUser.js';
import DataUser from './Data.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      hienthiForm : false,
      data : DataUser
    }
  }
  
  doitrangthai = () => {
      this.setState({
          hienthiForm : !this.state.hienthiForm
      })
  }

  //lấy từ khóa tìm kiếm từ component con <Search>
  timkiem = (keySearch) => {
    this.setState({
      tukhoatimkiem : keySearch
    })
  }

  themMoiUser = (username, phone, permission) => {

    var item = {};
    item.id = "";
    item.username = username;
    item.phone = phone;
    item.permission = permission;

    this.state.data.push(item);
    this.setState({
      data : this.state.data
    })
  }

  suathongtinUser = (userData) => {
    console.log(userData);
  }

  xoathongtinUser = (userData) => {
    
    var tempData = this.state.data;
    //filter lọc dữ liệu
    tempData =tempData.filter((item) => (item.id  !== userData.id))

    this.setState({
      data : tempData
    })
  }

  render() {

    // tìm kiếm
    var ketquatimkiem = [];
    this.state.data.forEach((item) => {
      if(item.username.indexOf( this.state.tukhoatimkiem) !== -1){
        ketquatimkiem.push(item);
      }
    });
    return (
      <div>
          <Header/>
          <div className="searchForm">
              <div className="container">            
                <Search ketnoi={()=> this.doitrangthai()}   hienthiForm= {this.state.hienthiForm} timkiem = {(keySearch)=> this.timkiem(keySearch)} />
                <div className="row">
                  <TableData dataUserProps = {ketquatimkiem} suathongtinUser={(userData) => this.suathongtinUser(userData)} xoathongtinUser={(userData) => this.xoathongtinUser(userData)} />
                  <AddUser hienthiForm = {this.state.hienthiForm} themmoi={(username, phone, permission)=>this.themMoiUser(username, phone, permission)}/>
                </div>
              </div>
  
          </div>
        
      </div>
    );
  }
}

export default App;