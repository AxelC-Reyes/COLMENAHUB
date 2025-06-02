import React from 'react';

const PaymentScreen = ({ setCurrentScreen }) => {
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar pago
    alert('Pago procesado con éxito');
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Finalizar contratación</h1>
        
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Método de pago</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Tarjeta de crédito</option>
              <option>Tarjeta de débito</option>
              <option>Transferencia bancaria</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Número de tarjeta</label>
            <input 
              type="text" 
              placeholder="1234 5678 9012 3456" 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Fecha de expiración</label>
              <input 
                type="text" 
                placeholder="MM/AA" 
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input 
                type="text" 
                placeholder="123" 
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-honey-7549 text-white rounded-lg hover:bg-honey-600 transition-colors"
          >
            Confirmar pago
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;