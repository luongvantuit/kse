import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import '../public/css/add-new-personal.css';

export default function AddNewPersonal() {

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [nameContract, setNameContract] = useState('Dài hạn');
  const [contractTerm, setContractTerm] = useState('6 tháng');
  const [department, setDepartment] = useState('Phòng ban 1');
  const [workingMode, setWorkingMode] = useState('Pass-time');
  const [startContract, setStartContract] = useState('');
  const [endContract, setEndContract] = useState('');
  const [gender, setGender] = useState('Nam');
  const [CMND, setCMND] = useState('');
  const [birthday, setBirthday] = useState('');

  const postSignUpUser = () => {
    const url = 'http://localhost:8080/api/users/signup';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: userName,
        password: password,
        fullname: fullName,
        role: 'staff',
        contractInfo: {
          nameContract: nameContract,
          startContract: startContract,
          endContract: endContract,
          contractTerm: contractTerm,
        },
        personInfo: {
          gender: gender === 'Nam' ? true : false,
          birthday: birthday,
          CMND: CMND,
          department: department,
          workingMode: workingMode,
        },
      }),
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  let navigate = useNavigate();
  const handleSubmit = () => {
    let check = userName !== '' & password !== '' & fullName !== '' & nameContract !== '' &
      contractTerm !== '' & department !== '' & workingMode !== '' & startContract !== '' &
      endContract !== '' & gender !== '' & CMND !== '' & birthday !== '';
    if (!check) {
      alert('Please enter a valid ...');
    } else {
      postSignUpUser();
      navigate("/personnel", { replace: true });
    }
  }

  return (
    <div className="add-new-personal">
      <div className="create-new">
        <span className="jss50">Tạo tài khoản nhân sự mới</span>
        <div className="basic-info">
          <div className="fullname">
            <span>Họ và tên:</span>
            <input
              type="text"
              className="jss51 jss53"
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className="username">
            <span>User name:</span>
            <input
              type="text"
              className="jss51 jss53"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="pass">
            <span>Password:</span>
            <input
              type="text"
              className="jss51 jss53"
              onChange={e => setPassword(e.target.value)}
            />
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
              <select
                className="selContract"
                onChange={e => setNameContract((e.target.value).trim())}
              >
                <option value='Dài hạn' >Dài hạn</option>
                <option value='Ngắn hạn'>Ngắn hạn</option>
              </select>
            </div>

            <div className="contract-term">
              <span>Thời hạn hợp đồng:</span>
              <select
                className="selContract"
                onChange={e => setContractTerm((e.target.value).trim())}
              >
                <option value='6 tháng'>6 tháng</option>
                <option value='1 năm'>1 năm</option>
                <option value='1.5 năm'>1.5 năm</option>
                <option value='2 năm'>2 năm</option>
                <option value='2.5 năm'>2.5 năm</option>
              </select>
            </div>
          </div>

          <div className="contract-info-right">
            <div className="contract-signing-date">
              <span>Ngày ký hợp đồng:</span>
              <input
                type="date"
                className="jss55"
                onChange={e => setStartContract(e.target.value)}
              />
            </div>

            <div className="contract-expiration-date">
              <span>Ngày hết hạn hợp đồng:</span>
              <input
                type="date"
                className="jss55"
                onChange={e => setEndContract(e.target.value)}
              />
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
              <select
                className="selContract"
                onChange={e => setDepartment(e.target.value)}
              >
                <option value='Phòng ban 1'>Phòng ban 1</option>
                <option value='Phòng ban 2'>Phòng ban 2</option>
              </select>
            </div>

            <div className="working-mode">
              <span>Chế độ làm việc:</span>
              <select
                className="selContract"
                onChange={e => setWorkingMode(e.target.value)}
              >
                <option value='Pass-time'>Pass-time</option>
                <option value='Full-time'>Full-time</option>
              </select>
            </div>
          </div>
          <div className="personal-info-right">
            <div className="gender">
              <span>Giới tính:</span>
              <select
                className="selContract"
                onChange={e => setGender(e.target.value)}
              >
                <option value='Nam'>Nam</option>
                <option value='Nữ'>Nữ</option>
              </select>
            </div>
            <div className="citizen-ID">
              <span>Căn cước công dân:</span>
              <input
                type="text"
                className="jss55"
                onChange={e => setCMND(e.target.value)}
              />
            </div>
            <div className="birth">
              <span>Ngày sinh:</span>
              <input
                type="date"
                className="jss55"
                onChange={e => setBirthday(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="endPage">
        <button className="cancel">HỦY BỎ</button>
        <button onClick={handleSubmit} className="save">LƯU</button>
      </div>
    </div>
  );
}
