import React, { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Sreach from './Sreach';
import Tablelist from './Tablelist';
import datauser from './Data.json';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state= {hienthiform: true,
    Data:datauser,
    editUserState: false,
    userEditObject:{},
    searchNd:''

    }
  }
 //hàm đổi trạng thái của hiển thị form
 doiTrangThai = () =>{
   this.setState({hienthiform:!this.state.hienthiform});
 } 
 // xây dựng hàm kiểm tra kết nối với component Search
  thongbao=() =>{
    alert('đã kết nối');
  }
  //hàm lấy dữ liệu từ Adduser gửi lên
  getNewUser = (name, tel, permission) =>{
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
    var item={};
    item.id='';
    item.name=name;
    item.tel=tel;
    item.permission= permission;
    var newItem=  this.state.Data;
    newItem.push(item);
    console.log(newItem);
    this.setState({Data:newItem})
}

  editUser = (editData) => {
    // console.log(editData);
    this.setState({
        userEditObject: editData
    });
}
  //hàm thay đổi trạng thái của Form sửa 
  changEditUserForm=() =>{
    this.setState({
      editUserState:!this.state.editUserState
    })
  }
  //hàm lấy thông tin cần sửa từ sreach gởi lên App
  getEditInfoApp=(info) =>{
    // console.log(info.name);
    this.state.Data.forEach((value, key) =>{
      // console.log(value.name);
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permission=info.permission;
    }      
    })
  }
  // hàm lấy thông tin cho chức năng tìm kiếm
  checkConnect=(dl) =>{
    // alert('kết nối rồi')
    
    this.setState({
      searchNd:dl
    });
    console.log('du lieu bo nhan dc ' + this.state.searchNd);
  }
  //hàm nhận id xóa từ con tablelist
  deleteUserInfo = (idUser) =>{
    // console.log('id app nhận dc ' +idUser);
    var tempData = this.state.Data;
    // tempData.Data.forEach((value, key) =>{
    //   if(value.id===idUser){
    //     // console.log(value.name);
        
    //   }
    // })
    tempData = tempData.filter(item=>item.id!=idUser);
    // console.log(tempData);
    this.setState({
      Data:tempData
    });
  }
  render(){
    // console.log(datauser);
    var ketqua=[]// khai báo mảng để lưu kết quả
    this.state.Data.forEach((item) =>{
      if(item.name.indexOf(this.state.searchNd )!==-1
      )
      {ketqua.push(item)}
    })
    console.log(ketqua);
  return (
    
    <div className="App">
      
      <Header/>
      <div className="container">
        <div className="row">
          <Sreach
          checkConnectProps={(dl) =>this.checkConnect(dl)}
          getEditInfoApp={(info) =>this.getEditInfoApp(info)}
          userEditObject={this.state.userEditObject}
          changEditUserForm={() =>this.changEditUserForm()}
          editUserState = {this.state.editUserState} 
          ketNoi={() =>this.doiTrangThai()}/>
          <Tablelist 
          deleteUserInfo = {(idUser) =>this.deleteUserInfo(idUser)}
          changEditUserForm={() =>this.changEditUserForm()}
            editUser={(editData) =>this.editUser(editData)}
          //  datauserProps={this.state.Data}
           datauserProps={ketqua}
           />
          <AddUser add={(name, tel, permission) =>this.getNewUser(name, tel, permission)} hienthiform={this.state.hienthiform}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
