function Login() {
  return (
    <div className="modal">
      <div className="modal__overlay"></div>

      <div className="modal__body">
        <div className="auth-form">
          <div className="auth-form__container">
            <div className="auth-form__header">
              <h3 className="auth-form__heading">Đăng nhập</h3>
              <span className="auth-form__switch-btn">Đăng ký</span>
            </div>

            <div className="auth-form__form">
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" placeholder="Số điện thoại" />
              </div>

              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Mật khẩu" />
              </div>
            </div>

            <div className="auth-form__aside">
              <div className="auth-form__help">
                <a href="" className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
              </div>
            </div>

            <div className="auth-form__controls">
              <button className="btn btn-normal auth-form__controls-back">TRỞ LẠI</button>
              <button className="btn btn--primary">ĐĂNG NHẬP</button>
            </div>
          </div>
                
          <div className="auth-form__socials">
            <a href="" className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon fab fa-facebook-square"></i>
              <span className="auth-form__socials-title">Kết nối với Facebook</span>
            </a>

            <a href="" className="auth-form__socials--google btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon fab fa-google"></i>
              <span className="auth-form__socials-title">Kết nối với Google</span>    
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;