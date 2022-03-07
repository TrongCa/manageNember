import React, { Component } from 'react';
import EditUser from './EditUser';

class Sreach extends Component {
    constructor(props) {
        super(props);
        this.state={
            userObj:{},
            nd:''
        }
    }
    //hàm lấy thông tin sửa
    getEditInfo=(info) =>{
        this.setState({
            userObj:info
        });
        this.props.getEditInfoApp(info)
    }
    //hàm kiểm tra kết nối với App để lấy trạng thái
    isShowEdit=() =>{
        if(this.props.editUserState===true)
        return <EditUser 
        getEditInfo={(info) =>this.getEditInfo(info)}
        userEditObject={this.props.userEditObject}
        changEditUserForm={() =>this.props.changEditUserForm()}/>
    }
    //hàm lấy thông tin control tìm kiếm
    isChange=(event) =>{
        // console.log(event.target.value);
        this.setState({
            nd: event.target.value
        });
        this.props.checkConnectProps(this.state.nd)
    }
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="searchForm">
                                <div className="form-group">
                                    <div className="btn-group">
                                        <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa" style={{ width: '600px' }} />
                                        <div onClick={(dl)=>this.props.checkConnectProps(this.state.nd)} className="btn btn-info">Tìm</div>
                                    </div>
                                </div>
                            </div>  {/* end tìm kiếm  */}
                        </div>
                        <div className="col-sm-3">
                            <div className="btn-group">
                                <div className="btn btn-outline-info" onClick={() =>this.props.ketNoi()}>Thêm mới</div>
                                <div className="btn btn-outline-secondary" onClick={() =>this.props.ketNoi()}>Đóng</div>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {this.isShowEdit()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sreach;