import React from 'react';

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Primeiro background */}
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <img src="/img/instagram-logo.png" alt="Instagram Logo" className="mx-auto mb-6" />
        <input 
          type="text" 
          placeholder="Telefone, nome de usuário ou email" 
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="password" 
          placeholder="Senha" 
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded mb-4">Entrar</button>
        <div className="flex items-center justify-center mb-4">
          <div className="border-t w-full border-gray-300"></div>
          <span className="px-4 text-gray-500">OU</span>
          <div className="border-t w-full border-gray-300"></div>
        </div>
        <div className="text-center">
          <button className="text-blue-900 font-semibold">
            <i className="fab fa-facebook mr-2"></i>Entrar com o Facebook
          </button>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 text-sm">Esqueceu a senha?</a>
        </div>
      </div>

      {/* Segundo background */}
      <div className="bg-white p-4 rounded-md shadow-md w-full max-w-sm mt-4 text-center">
        <p>Não tem uma conta? <a href="#" className="text-blue-500">Cadastra-se</a></p>
      </div>

      {/* Fora dos backgrounds */}
      <div className="flex items-center justify-center mt-4">
        <p className="mr-4">Obter o aplicativo</p>
        <img src="/img/App-Store-Logo.png" alt="Apple Store" className="w-20 h-auto mr-2" />
        <img src="/img/Google_Play_Store_logo.png" alt="Google Play" className="w-20 h-auto" />
      </div>
    </div>
  );
}

export default LoginForm;