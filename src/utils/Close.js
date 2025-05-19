export const Close = () => {
  const ham = document.querySelector("#ham");
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");

  ham.style.display = 'none';
  open.style.display = 'flex';
  close.style.display = 'none';

  document.body.style.overflow = 'auto';
}