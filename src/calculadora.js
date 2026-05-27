export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function calcularDesconto(preco, percentual) {
  if (preco < 0) throw new Error("Preco nao pode ser negativo");
  if (percentual < 0 || percentual > 100) throw new Error("Percentual invalido");
  return preco - (preco * percentual) / 100;
}

export function calcularParcelamento(total, parcelas) {
  if (parcelas <= 0) throw new Error("Numero de parcelas invalido");
  return Math.round((total / parcelas) * 100) / 100;
}
