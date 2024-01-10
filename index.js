const btn = document.querySelector('button');
btn.addEventListener('click', getScheme);
let colorsArray = [];

function getScheme() {
  const colorPicker = document.querySelector('input');
  let hexCode = colorPicker.value.slice(1);
  const modeChoice = document.querySelector('#mode').value;
  let apiData = [];

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${modeChoice}&count=5`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      apiData.push(data);
      colorsArray = apiData[0].colors;
      renderColors();
    });
}

function renderColors() {
  let html = '';

  colorsArray.map((color) => {
    const value = color.hex.value;
    const hexValueName = color.hex.clean;

    html += `
    <div>
      <div style="background-color: ${value};"></div>
      <h2>#${hexValueName}</h2>
    </div>`;
  });

  document.querySelector('#colors-container').innerHTML = html;
}
