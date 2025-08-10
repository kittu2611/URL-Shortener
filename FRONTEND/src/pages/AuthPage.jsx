import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center">
      {/* Single Clean Card */}
      <div className="bg-white/90 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-xl w-full max-w-sm">
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
      </div>
    </div>
  );
};

export default AuthPage;
