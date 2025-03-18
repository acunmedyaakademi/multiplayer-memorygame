import "../assets/css/Login.css";

import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login attempt:", { email: formData.email, password: formData.password });
      // Implement login logic here
    } else {
      console.log("Registration attempt:", formData);
      // Implement registration logic here
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>
          <p>{isLogin ? "Hesabına erişim sağla" : "Yeni bir hesap oluştur"}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Kullanıcı adınızı girin"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Şifremi Unuttum</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}
            <button className="toggle-btn" onClick={toggleForm}>
              {isLogin ? "Kayıt Ol" : "Giriş Yap"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
