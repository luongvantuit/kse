import React from 'react';
import './Timesheets.css';
import Logo from "../image/image_logo_bts.PNG";
import Icon0 from "../image/ring.png";
import Avt from "../image/avt.png";
import Icon1 from "../image/icon1.png";
import Icon2 from "../image/icon2.png";
import Icon3 from "../image/icon3.png";
import Icon4 from "../image/icon4.png";
import Icon6 from "../image/search.png";


function Timesheets() {
    return (
        <React.Fragment>
            <div className='Timesheets'>
                <div className='TimesheetsHeader'>
                    <div className='abc'>
                        <div className='def'>
                            <div className='InfoCompany'>
                                <img src={Logo} alt='logo'/>
                                <h6 className='jss6'> TNHH </h6>
                            </div>
                            <div className='Info'>
                                <div className='aaa'>
                                    <button className='ring'>
                                    <img src={Icon0} alt='icon0' className='icon0'/>
                                    </button>
                                    <button className='avatar'>
                                        <span class='hello'>Xin chào</span>
                                        <img src={Avt} alt='avt' className='avt'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Menu'>
                    <button className='option1'>
                        <img src={Icon1} alt='icon1' className='icon'/>
                        <span class='jss7'>Chấm công</span>
                    </button>

                    <button className='option2'>
                        <img src={Icon2} alt='icon2' className='icon'/>
                        <span class='jss7'>Đơn từ</span>
                    </button>

                    <span className='text'> Quản lí </span>

                    <button className='option3'>
                        <img src={Icon3} alt='icon3' className='icon'/>
                        <span class='jss7'>Bảng công</span>
                    </button>

                    <button className='option4'>
                        <img src={Icon4} alt='icon4' className='icon'/>
                        <span class='jss7'>Nhân sự</span>
                    </button>
                </div>

                <div className='jss11'>
                    <h4 class='jss13'>Danh sách chấm công</h4>

                    <div className='jss9'>
                        <button class='jss26 jss27 jss28 jss29' tabIndex="0" type='button'>
                            <span class='jss30'>
                                <svg class='jss31' focusable='false' viewBox='0 0 24 24' aria-hidden='true' role='presentation'>
                                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
                                </svg>
                            </span>
                        </button>
                        <span class='jss32 jss33'>
                            <span class='jss34'>Tháng</span>
                            8
                            /
                            2022
                        </span>
                        <button class='jss35 jss27 jss28 jss29' tabIndex="0" type='button'>
                            <span class='jss30'>
                                <svg class='jss31' focusable='false' viewBox='0 0 24 24' aria-hidden='true' role='presentation'>
                                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                
                <div className='jss12'>
                    <thead class='jss15'>
                        <tr class='jss16'>
                            <th class='jss17 jss18' scope='col'>
                                <span>#</span>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <form class='css-control' action='/search'>
                                        <input type='search' placeholder='Họ và tên' autoComplete='off' class='jss10'></input>
                                        <span class='jss23'></span>
                                        <button class='jss24'>
                                            <img src={Icon6} alt='icon6' className='icon6'/>
                                        </button>
                                    </form> 
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <form class='css-control' action='/search'>
                                        <input type='search' placeholder='Email' autoComplete='off' class='jss10'></input>
                                        <span class='jss23'></span>
                                        <button class='jss24'>
                                            <img src={Icon6} alt='icon6' className='icon6'/>
                                        </button>
                                    </form>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <form class='css-control' action='/search'>
                                        <input type='search' placeholder='Phòng ban' autoComplete='off' class='jss10'></input>
                                        <span class='jss23'></span>
                                        <button class='jss24'>
                                            <img src={Icon6} alt='icon6' className='icon6'/>
                                        </button>
                                    </form>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <div class='jss21'>
                                        <div class='placeholder'>Số công đi làm</div>
                                    </div>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <div class='jss21'>
                                        <div class='placeholder'>Công nghỉ lễ</div>
                                    </div>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <div class='jss21'>
                                        <div class='placeholder'>Nghỉ phép có lương</div>
                                    </div>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <div class='jss21'>
                                        <div class='placeholder'>Nghỉ phép không lương</div>
                                    </div>
                                </div>
                            </th>
                            <span class='jss25'></span>
                            <th class='jss17 jss18' scope='col'>
                                <div class='jss19'>
                                    <div class='jss21'>
                                        <div class='placeholder'>Tổng công tính lương</div>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Timesheets;