import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import '../public/css/edit-personal.css';

export default function EditPersonal() {

    const params = useLocation();
    // console.log('params: ',params.state.person);
    const person = params.state.person;

    const [data, setData] = useState([]);

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [nameContract, setNameContract] = useState('');
    const [contractTerm, setContractTerm] = useState('');
    const [department, setDepartment] = useState('');
    const [workingMode, setWorkingMode] = useState('');
    const [startContract, setStartContract] = useState('');
    const [endContract, setEndContract] = useState('');
    const [gender, setGender] = useState('');
    const [CMND, setCMND] = useState('');
    const [birthday, setBirthday] = useState('');

    const aaa = (data) => {
        setUserName(data[0].username);
        setFullName(data[0].fullname);
        setNameContract(data[2].nameContract);
        setContractTerm(data[2].contractTerm);
        setDepartment(data[1].department);
        setWorkingMode(data[1].workingMode);
        setStartContract(data[2].startContract);
        setEndContract(data[2].endContract);
        setGender(data[1].gender);
        setCMND(data[1].CMND);
        setBirthday(data[1].birthday);
    }

    useEffect(() => {
        const url = "http://localhost:8080/api/profile/header";
        fetch(url, {
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip,deflate,sdch',
                'username': person.username,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.profile[1].gender);
                setData(data.profile);
                aaa(data.profile);
            })
    }, []);

    const postPutUser = () => {
        const url = 'http://localhost:8080/api/profile';
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    username: userName,
                    password: password,
                    fullname: fullName,
                },
                contractInfo: {
                    nameContract: nameContract,
                    startContract: startContract,
                    endContract: endContract,
                    contractTerm: contractTerm,
                },
                personInfo: {
                    gender: gender === 'male' ? true : false,
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
        postPutUser();
        navigate("/personnel", { replace: true });
    }

    return (
        <div className="add-new-personal">
            <div className="create-new">
                <span className="jss50">Thay đổi tài khoản nhân sự</span>
                <div className="basic-info">
                    <div className="fullname">
                        <span>Họ và tên:</span>
                        <input
                            defaultValue={fullName}
                            onChange={e => setFullName(e.target.value)}
                            type="text"
                            className="jss51 jss53"
                        />
                    </div>
                    <div className="username">
                        <span>User name:</span>
                        <input
                            disabled
                            defaultValue={userName}
                            onChange={e => setUserName(e.target.value)}
                            type="text"
                            className="jss51 jss53"
                        />
                    </div>
                    <div className="pass">
                        <span>Password:</span>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="text"
                            className="jss51 jss53"
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
                                value={nameContract}
                                onChange={e => setNameContract((e.target.value).trim())}
                                className="selContract"
                            >
                                <option value='Dài hạn' >Dài hạn</option>
                                <option value='Ngắn hạn'>Ngắn hạn</option>
                            </select>
                        </div>

                        <div className="contract-term">
                            <span>Thời hạn hợp đồng:</span>
                            <select
                                value={contractTerm}
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
                            <span>Ngày ký hợp đồng:</span>
                            <input
                                defaultValue={startContract}
                                onChange={e => setStartContract(e.target.value)}
                                type="date"
                                className="jss55"
                            />
                        </div>

                        <div className="contract-expiration-date">
                            <span>Ngày hết hạn hợp đồng:</span>
                            <input
                                defaultValue={endContract}
                                onChange={e => setEndContract(e.target.value)}
                                type="date"
                                className="jss55"
                            />
                        </div>
                    </div>
                </div>

                <span className="details-profile">Thông tin cá nhân</span>
                <div className="personal-info">
                    <div className="personal-info-left">
                        <div className="personal-code">
                            <span>Mã số cá nhân:</span>
                            <input
                                defaultValue='1111'
                                type="text"
                                className="jss55"
                            />
                        </div>

                        <div className="department">
                            <span>Phòng ban:</span>
                            <select
                                value={department}
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
                                value={workingMode}
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
                                value={gender ? 'male': 'female'}
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
                                defaultValue={CMND}
                                onChange={e => setCMND(e.target.value)}
                                type="text"
                                className="jss55"
                            />
                        </div>
                        <div className="birth">
                            <span>Ngày sinh:</span>
                            <input
                                defaultValue={birthday}
                                onChange={e => setBirthday(e.target.value)}
                                type="date"
                                className="jss55"
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
