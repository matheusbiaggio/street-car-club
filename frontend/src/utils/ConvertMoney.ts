export function Money(valor: number) {
  // Converte o número para uma string e insere um ponto a cada 3 dígitos da direita para a esquerda
  const valorFormatado = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  // Retorna o valor formatado com o símbolo R$
  return `R$ ${valorFormatado}`;
}
