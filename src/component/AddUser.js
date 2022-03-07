import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthainutthem: true,
            id: '',
            name: '',
            tel: '',
            permission: '',
        }
    }
    hiennut = () => {
        if (this.state.trangthainutthem === false)
            return <div onClick={() => this.xuLyTrangThai()} className="btn btn-outline-info btn-block">Thêm mới</div>
        else
            return <div onClick={() => this.xuLyTrangThai()} className="btn btn-outline-secondary btn-block">Đóng</div>

    }

    xuLyTrangThai = () => {
        this.setState({
            trangthainutthem: !this.state.trangthainutthem
        })
    }

    hienForm = () => {
        if (this.state.trangthainutthem === true)
            return (
                <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>

                    <div className="card-header">Thêm thành viên</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Phân quyền</label>
                            <select className="form-control">
                                <option>Choose...</option>
                                <option value="{1}">Admin</option>
                                <option value="{2}">User</option>
                                <option value="{3}">Modrater</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn btn-primary">Lưu</div>
                </div>
            )
    }
    kiemTraTrangThai = () => {
        if (this.props.hienthiform === true)
            return (
                <div className="col-12">
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>

                        <div className="card-header">Thêm thành viên</div>
                        <form>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name = "name" id aria-describedby="helpId" placeholder="Nhập tên" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name = "tel" id aria-describedby="helpId" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Phân quyền</label>
                                <select className="form-control" name = "permission" onChange={(event) =>this.isChange(event)}>
                                    <option>Choose...</option>
                                    <option value="{1}">Admin</option>
                                    <option value="{2}">User</option>
                                    <option value="{3}">Modrater</option>
                                </select>
                            </div>
                        </div>
                        <input type="reset" value="Thêm" className="btn btn-primary" onClick={(name, tel, permission) =>this.props.add(this.state.name, this.state.tel, this.state.permission)}/>
                        </form>
                    </div>
                </div>
            )
    }
    //hàm lấy thông tin từ các control
    isChange=(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
          });
          var pt={};
          pt.id = this.state.id;
          pt.name = this.state.name;
          pt.tel = this.state.tel;
          pt.permission = this.state.permission;
        //   console.log(pt);
    }
    render() {
        // console.log(this.props.hienthiform);
        // console.log(this.state);
        return (
            <div>
                {/* {this.hiennut()}
                {this.hienForm()} */}
                {this.kiemTraTrangThai()}
            </div>

        );
    }
}

export default AddUser;