const { somar, subtrair, multiplicar, dividir } = require('./calc');

describe('Operações Matemáticas', () => {
  test('Soma de 2 + 3 deve ser 5', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('Divisão por zero deve lançar erro', () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não permitida");
  });
});