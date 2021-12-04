function Register() {
  return (
    <div className="modal">
      <div className="modal__overlay"></div>

      <div className="modal__body">
        <div className="auth-form"> 
          <div className="auth-form__container">
            <div className="auth-form__header">
              <h3 className="auth-form__heading">Đăng ký</h3>
                <span className="auth-form__switch-btn">Đăng nhập</span>
            </div>

            <div className="auth-form__form">
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" placeholder="Số điện thoại" />
              </div>

              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Mật khẩu" />
              </div>

              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu" />
              </div>
            </div>

            <div className="auth-form__controls">
              <button className="btn btn-normal auth-form__controls-back">TRỞ LẠI</button>
              <button className="btn btn--primary">ĐĂNG KÝ</button>
            </div>
          </div>
                
          <div className="auth-form__socials">
            <button className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon fab fa-facebook-square"></i>
              <span className="auth-form__socials-title">Kết nối với Facebook</span>
            </button>

            <button className="auth-form__socials--google btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon fab fa-google"></i>
              <span className="auth-form__socials-title">Kết nối với Google</span>    
            </button>
          </div>
        </div>      
      </div>
    </div> 
  );
}

export default Register;