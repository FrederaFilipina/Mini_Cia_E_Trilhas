import React from 'react'


function Toggle() {
  return (
    <div className="cont-toggle">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Vamos nessa trilheiro</h1>
          <p>Que bom te ver de novo! Faça login e continue aproveitando tudo.</p>
          <button>Login</button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>E aí,trilheiro!</h1>
          <p>É rápido! castra-se e explore tudo que preparamos para você.</p>
          <button>Cadastre-se</button>
        </div>
      </div>
    </div>
  )
}

export default Toggle