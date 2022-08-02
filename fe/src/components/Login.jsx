import React from 'react'
import './Login.css';
import Logo from '../image/image_logo_bts.PNG';


export default function Login() {
  
  return (
    <React.Fragment> 
        <div className="login-background">
          <div className='login-container'>
            <img src={Logo} alt='logo' className='logo'/>
            <h6 className='jss6'>HYBE Co.</h6>
          </div>

          <div className='login-content'>
            <div className='text-center'>Chào mừng trở lại!</div>
            
            <div className='text-username'>
              <p>Tên đăng nhập/E-mail</p>
              <input type="text" 
              className="rectangle" 
              />
            </div>

            <div className='text-password'>
              <p>Mật khẩu</p>
              <input type="password" className="rectangle" />

              <div className='text-forgot'>
                <span>Quên mật khẩu?</span>
              </div>
            
            </div>

            

            <div className='btn-rectangle'>
              <button className='btn-login'>ĐĂNG NHẬP</button>
            </div>
            

          
          
          
          </div>
          
            
        </div>
    </React.Fragment>
  )
}
