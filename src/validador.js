export function validarEmail(email) {
  if (!email || typeof email !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCPF(cpf) {
  if (!cpf || typeof cpf !== "string") return false;
  const limpo = cpf.replace(/\D/g, "");
  if (limpo.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(limpo)) return false;
  return true;
}

export function validarSenha(senha) {
  if (!senha || senha.length < 8) return { valida: false, motivo: "Minimo 8 caracteres" };
  if (!/[A-Z]/.test(senha)) return { valida: false, motivo: "Precisa de letra maiuscula" };
  if (!/[0-9]/.test(senha)) return { valida: false, motivo: "Precisa de numero" };
  return { valida: true, motivo: null };
}
