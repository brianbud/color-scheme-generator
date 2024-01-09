const btn = document.querySelector('button');
const colorPicker = document.querySelector('input');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('clicked!', colorPicker.value);
});
