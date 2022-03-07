import React, { Component } from 'react';
import TableDatarow from './TableDatarow';

class Tablelist extends Component {
  //hàm load dữ liệu
  mappingDataUser= () =>
    this.props.datauserProps.map((value, key) =>(
      <TableDatarow 
      deleteClick={(idUser) =>this.deleteClick(idUser)}
      changEditUserForm={() =>this.props.changEditUserForm()}
      editFunClick={(editData) => this.props.editUser(value)}
      username={value.name}
       stt={ key}
        tel={value.tel}
        permission={value.permission}
        id={value.id}/>
      ))
  //hàm nhận id xóa từ con tabledatarow
  deleteClick = (idUser) =>{
    // console.log(idUser);
    this.props.deleteUserInfo(idUser)
  }
    render() {
      // console.log(this.props.datauserProps);
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                {/* tiêu đề */}
                <tr>
                  <th>Stt</th>
                  <th>Họ Tên</th>
                  <th>Số Đt</th>
                  <th>Phân quyền</th>
                  <th>Chức năng</th>
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

export default Tablelist;