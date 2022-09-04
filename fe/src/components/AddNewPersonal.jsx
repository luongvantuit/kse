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
  const [workingMode, setWorkingMode] = useState('Part-time');
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
      navigate("/app/personnel", { replace: true });
    }
  }
  const handleCancel = () => {
    const notify = window.confirm('Ahihi');
    if (notify) {
      navigate("/app/personnel", { replace: true });
    }
  }

  return (
    <div className="add-new-personal">
      <span className="add-new-personal-title">Tạo tài khoản nhân sự mới</span>
      <div className="basic-info">
        <div className="fullname">
          <span className="text-field">Họ và tên:</span>
          <input
            defaultValue={fullName}
            onChange={e => setFullName(e.target.value)}
            type="text"
            className="jss51 jss53"
          />
        </div>
        <div className="username">
          <span className="text-field">User name:</span>
          <input
            defaultValue={userName}
            onChange={e => setUserName(e.target.value)}
            type="text"
            className="jss51 jss53"
          />
        </div>
        <div className="pass">
          <span className="text-field">Password:</span>
          <input
            onChange={e => setPassword(e.target.value)}
            type="text"
            className="jss51 jss53"
          />
        </div>
      </div>

      <div className="contract-info">
        <span className="contract-info-title">Thông tin hợp đồng</span>
        <div className="contract-info-child">
          <div className="contract-info-left">
            <div className="type-of-contract">
              <span className="text-field">Loại hợp đồng:</span>
              <select
                onChange={e => setNameContract((e.target.value).trim())}
                className="selContract"
              >
                <option value='Dài hạn' >Dài hạn</option>
                <option value='Ngắn hạn'>Ngắn hạn</option>
              </select>
            </div>

            <div className="contract-term">
              <span className="text-field">Thời hạn hợp đồng:</span>
              <select
                onChange={e => setContractTerm((e.target.value))}
                className="selContract"
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
              <span className="text-field">Ngày ký hợp đồng:</span>
              <input
                onChange={e => setStartContract(e.target.value)}
                type="date"
                className="jss55"
              />
            </div>

            <div className="contract-expiration-date">
              <span className="text-field">Ngày hết hạn hợp đồng:</span>
              <input
                onChange={e => setEndContract(e.target.value)}
                type="date"
                className="jss55"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="personal-info">
        <span className="personal-info-title">Thông tin cá nhân</span>
        <div className="personal-info-child">
          <div className="personal-info-left">
            <div className="personal-code">
              <span>Mã số cá nhân:</span>
              <input
                type="text"
                className="jss55"
              />
            </div>

            <div className="department">
              <span>Phòng ban:</span>
              <select
                onChange={e => setDepartment(e.target.value)}
                className="selContract"
              >
                <option value='Phòng ban 1'>Phòng ban 1</option>
                <option value='Phòng ban 2'>Phòng ban 2</option>
              </select>
            </div>

            <div className="working-mode">
              <span>Chế độ làm việc:</span>
              <select
                onChange={e => setWorkingMode(e.target.value)}
                className="selContract"
              >
                <option value='Part-time'>Part-time</option>
                <option value='Full-time'>Full-time</option>
              </select>
            </div>
          </div>
          <div className="personal-info-right">
            <div className="gender">
              <span>Giới tính:</span>
              <select
                onChange={e => setGender(e.target.value)}
                className="selContract"
              >
                <option value='female'>Nữ</option>
                <option value='male'>Nam</option>
              </select>
            </div>
            <div className="citizen-ID">
              <span>Căn cước công dân:</span>
              <input
                onChange={e => setCMND(e.target.value)}
                type="text"
                className="jss55"
              />
            </div>
            <div className="birth">
              <span>Ngày sinh:</span>
              <input
                onChange={e => setBirthday(e.target.value)}
                type="date"
                className="jss55"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="endPage">
        <button onClick={handleCancel} className="cancel">HỦY BỎ</button>
        <button onClick={handleSubmit} className="save">LƯU</button>
      </div>
    </div>
  );
}
