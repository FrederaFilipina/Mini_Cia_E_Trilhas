import React from 'react'


function Toggle({setStado}) {


  return (
    <div className="cont-toggle">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Vamos nessa trilheiro</h1>
          <p>Que bom te ver de novo! Faça login e continue aproveitando tudo.</p>
          <button onClick={()=>setStado(false)} style={{backgroundColor:"#ffff",color:"black", border:'none'}} >Login</button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>E aí,trilheiro!</h1>
          <p>É rápido! castra-se e explore tudo que preparamos para você.</p>
          <button onClick={()=>setStado(true)} style={{backgroundColor:"#ffff",color:"black", border:'none'}} >Cadastre-se</button>
        </div> 
      </div>
    </div>
  )
}

export default Toggle