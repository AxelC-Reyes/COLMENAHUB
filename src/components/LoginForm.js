import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function LoginRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Panel izquierdo */}
        <div className="md:w-2/5 bg-gradient-to-br from-[#7549] to-[#a36a00] p-8 flex flex-col justify-center items-center text-white relative hidden md:flex">
          <div className="absolute top-8 left-8 text-amber-200 text-xl font-bold">HoneyAuth</div>
          <div className="text-center z-10">
            <h2 className="text-4xl font-bold mb-4">
              {isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}
            </h2>
            <p className="text-amber-200 text-lg mb-8 max-w-md">
              {isLogin
                ? "Accede a tu cuenta para continuar tu experiencia personalizada"
                : "Únete a nuestra comunidad y descubre todas las ventajas"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-amber-700/30 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30">
                <div className="h-8 w-8 bg-amber-500 rounded-full mb-2 mx-auto" />
                <div className="h-2 bg-amber-400/80 rounded-full mb-1 w-16 mx-auto" />
                <div className="h-2 bg-amber-400/60 rounded-full w-12 mx-auto" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 text-amber-200/80 text-sm">
            © 2023 HoneyAuth. Todos los derechos reservados.
          </div>
        </div>

        {/* Panel derecho */}
        <div className="md:w-3/5 p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">HoneyAuth</h1>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#a36a00] font-semibold hover:text-[#7549] transition-colors"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isLogin ? "Inicia sesión en tu cuenta" : "Crea una nueva cuenta"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isLogin
              ? "Ingresa tus credenciales para acceder a tu cuenta"
              : "Completa los siguientes campos para registrarte"}
          </p>

          <form className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#a36a00] focus:border-transparent"
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#a36a00] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#a36a00] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500 hover:text-[#a36a00]" />
                ) : (
                  <FaEye className="text-gray-500 hover:text-[#a36a00]" />
                )}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#a36a00] focus:ring-[#a36a00] border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-700">
                    Recuérdame
                  </label>
                </div>
                <button
                  type="button"
                  className="text-[#a36a00] hover:text-[#7549] font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-[#a36a00] focus:ring-[#a36a00] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                  Acepto los <a href="#" className="text-[#a36a00] hover:underline">términos y condiciones</a> y la <a href="#" className="text-[#a36a00] hover:underline">política de privacidad</a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#a36a00] to-[#7549] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-200"
            >
              {isLogin ? "Iniciar sesión" : "Crear cuenta"}
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">o continúa con</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-[#a36a00] hover:border-[#a36a00] transition-colors"
              >
                <FaGoogle className="text-xl" />
              </button>
              <button
                type="button"
                className="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-[#a36a00] hover:border-[#a36a00] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </button>
              <button
                type="button"
                className="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-[#a36a00] hover:border-[#a36a00] transition-colors"
              >
                <FaGithub className="text-xl" />
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p className="mb-2">Al registrarte, aceptas nuestras <a href="#" className="text-[#a36a00] hover:underline">Condiciones</a> y <a href="#" className="text-[#a36a00] hover:underline">Política de Privacidad</a></p>
            <p>Protegemos tus datos según la normativa RGPD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
