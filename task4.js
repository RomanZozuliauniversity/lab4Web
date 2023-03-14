const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

  const shadowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  box.style.boxShadow = `2px 2px 10px ${shadowColor}`;
  
  
  const newWidth = Math.floor(Math.random()*300) + 50;
  const newHeight = Math.floor(Math.random()*300) + 50;
  box.style.width = `${newWidth}px`;
  box.style.height = `${newHeight}px`;
});