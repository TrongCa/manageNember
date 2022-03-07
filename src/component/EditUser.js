import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    
    //hàm nhận thông tin đã sửa
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }
    //hàm đóng gói dữ liệu sửa để gởi đi
    saveButton=() =>{
        var info={};
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permission=this.state.permission;
        this.props.getEditInfo(info)		//đồng thời truyền thông tin cho props 
        this.props.changEditUserForm()
    }

    render() {
        // console.log(this.state);
        return (
            <div className="col-12">
                <div className="card text-white bg-secondary border-primary mb-3 mt-3" >
                    <div className="card-header text-center">Sửa thông tin user</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) =>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) =>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) =>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="form-control" name="Permission">
                                <option>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                        </div>
                        <div className="form-group">
                            {/* <div className="btn btn-block btn-primary" onClick={(name, tel, Permission) =>this.props.add(this.state.name, this.state.tel, this.state.Permission)}>Thêm</div> */}

                            <input onClick={() =>this.saveButton()} type="button" className="btn btn-block btn-primary" value="Cập nhật" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;