import React, { Component } from 'react';

class TableDatarow extends Component {
    cacQuyen=()=>{
        if(this.props.permission===1) {return "Adim";}
        else if(this.props.permission===2) {return "Moderetor";}
            else {return "Normal User";}
    }
    edit=() =>{
        this.props.editFunClick();
        this.props.changEditUserForm();
    }
    //hàm lấy thông tin xóa chức năng xóa
    deleteUser=(idUser) =>{
        // console.log('id của user' +idUser);
        this.props.deleteClick(idUser)
    }
    render() {
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{this.cacQuyen()}</td>
                <td><div className="btn-group">
                    <div onClick={() =>this.edit()} className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                    <div onClick={(idUser) =>this.deleteUser(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
                </div></td>
            </tr>
        );
    }
}

export default TableDatarow;