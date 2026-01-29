const { validarEmail, validarCPF } = require('./validadores');

test('Deve validar e-mails corretamente', () => {
  expect(validarEmail('teste@link.com')).toBe(true);
  expect(validarEmail('email-invalido')).toBe(false);
});

test('Deve validar CPF corretamente (formato)', () => {
  expect(validarCPF('123.456.789-00')).toBe(true);
  expect(validarCPF('12345678900')).toBe(true);
  expect(validarCPF('123-abc')).toBe(false);
});