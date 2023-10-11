import React, { useState } from 'react';

import "./Login.css";

const Login: React.FC = () => {
    const [checked, setChecked] = useState(false);

return (
<div className='Login'>
<div className="logo"></div>
<div className="photo"></div>
<div className="container">
            <button className="button">Продолжить</button>
          </div>
          <div className="text">Войти</div>
          <div className="container-text">
          <button className="text-button">Не можете войти?</button>
          </div>
          <div className="container-text2">
          <button className="text-button2">Создать учетную запись</button>
          </div>
          <div className="container-login">
          <button className="button-login">Логин</button>
          </div>
          <div className="container-password">
          <button className="button-password">Пароль</button>
          </div>
          <div className="check"><form>
  <label>
    <input type="checkbox"/>
    Не выходить из учетной записи
  </label>
</form>
</div>
</div>
);
};

export default Login;