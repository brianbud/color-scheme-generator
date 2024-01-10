const btn = document.querySelector('button');
btn.addEventListener('click', getScheme);

function getScheme() {
  const colorPicker = document.querySelector('input');
  let hexCode = colorPicker.value.slice(1);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=analogic&count=5`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log('clicked!', colorPicker.value.slice(1));
}
