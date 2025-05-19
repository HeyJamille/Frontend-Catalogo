export const Open = () => {
  const ham = document.querySelector("#ham");
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");

  ham.style.display = 'flex';
  open.style.display = 'none';
  close.style.display = 'flex';

  document.body.style.overflow = 'hidden';
}
    
