const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validarCPF = (cpf) => {
  // Validação simplificada de formato via Regex
  const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
  return regex.test(cpf);
};

module.exports = { validarEmail, validarCPF };

// Projeto de Testes TDD - Finalizado