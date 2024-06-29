import React, { useEffect } from "react";

const RecoverPasswordStep2 = ({ recoveryMethod, email, phone, onMoveToStep3 }) => {
  useEffect(() => {
    // Send the reset code (replace with actual implementation)
    console.log("Enviando código de redefinição para:", recoveryMethod, email || phone);
    // ... (Implement email or SMS sending)
  }, [recoveryMethod, email, phone]);

  return (
    <div>
      <h2>Verificação de código</h2>
      <p>
        Um código de redefinição foi enviado para o {recoveryMethod} informado. Insira o código abaixo para continuar.
      </p>
      <div className="form-group">
        <label htmlFor="resetCode">Código de redefinição:</label>
        <input
          type="text"
          id="resetCode"
          placeholder="Digite o código recebido"
          required
          onChange={(e) => {
            // Handle code input change
            // ...
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onMoveToStep3(recoveryMethod, email, phone)}
      >
        Verificar código
      </button>
    </div>
  )
}
