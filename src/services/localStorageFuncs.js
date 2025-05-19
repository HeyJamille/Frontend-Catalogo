/* Localstorage serve para guardar os itens do carrinho quando relogar a página */
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value)); 
  // JSON.stringify transforma o value em string
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
  // JSON.parse transforma tudo em array, como era antes
}