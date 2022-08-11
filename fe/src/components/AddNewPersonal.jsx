import React from "react";

import '../public/css/personal-information.css';

export default function AddNewPersonal() {
  return (
    <div className="add-new-personal">
      <div className="create-new">
        <span className="jss50">Tạo tài khoản nhân sự mới</span>
        <div className="basic-info">
          <div className="fullname">
            <span>Họ và tên:</span>
            <input type="text" className="jss51 jss53" />
          </div>
          <div className="username">
            <span>User name:</span>
            <input type="text" className="jss51 jss53" />
          </div>
          <div className="pass">
            <span>Password:</span>
            <input type="text" className="jss51 jss53" />
          </div>
        </div>

        <span className="jss52">Hiển thị thêm thông tin</span>
      </div>

      <div className="details">
        <span className="details-name">Thông tin hợp đồng</span>

        <div className="contract-info">
          <div className="contract-info-left">
            <div className="type-of-contract">
              <span>Loại hợp đồng:</span>
              <select className="selContract" />
            </div>

            <div className="contract-term">
              <span>Thời hạn hợp đồng:</span>
              <select className="selContract" />
            </div>
          </div>

          <div className="contract-info-right">
            <div className="contract-signing-date">
              <span>Ngày ký hợp đồng:</span>
              <input type="date" className="jss55" />
            </div>
            
            <div className="contract-expiration-date">
              <span>Ngày hết hạn hợp đồng:</span>
              <input type="date" className="jss55" />
            </div>
          </div>
        </div>

        <span className="details-profile">Thông tin cá nhân</span>
        <div className="personal-info">
          <div className="personal-info-left">
            <div className="personal-code">
              <span>Mã số cá nhân:</span>
              <input type="text" className="jss55" />
            </div>

            <div className="department">
              <span>Phòng ban:</span>
              <select className="selContract" />
            </div>

            <div className="working-mode">
              <span>Chế độ làm việc:</span>
              <select className="selContract" />
            </div>
          </div>
          <div className="personal-info-right">
            <div className="gender">
              <span>Giới tính:</span>
              <select className="selContract" />
            </div>
            <div className="citizen-ID">
              <span>Căn cước công dân:</span>
              <input type="text" className="jss55" />
            </div>
            <div className="birth">
              <span>Ngày sinh:</span>
              <input type="date" className="jss55" />
            </div>
          </div>
        </div>
      </div>
      <div className="endPage">
        <button className="cancel">HỦY BỎ</button>
        <button className="save">LƯU</button>
      </div>
    </div>
  );
}
