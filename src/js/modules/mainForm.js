
const mainForm = (formBlock) => {
  const form = formBlock.querySelector('.contact__form');
  const select = formBlock.querySelector('.contact__form-select');
  select.addEventListener('change', function () {
    var selectedValue = this.value;

    if (selectedValue === 'Other') {
      console.log('Other option selected!');
      formBlock.querySelector('.contact__form-box.other').classList.add('active');
    } else {
      formBlock.querySelector('.contact__form-box.other').classList.remove('active');
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
  });
  function sendData() {
    let formData = new FormData(form);
    form.appendChild(spinner);
    fetch('https://formsubmit.co/chopikvitali@yandex.by', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        formBlock.classList.add('success');
        formBlock.querySelector('.spinner').remove();
      })
      .catch(error => {
        form.innerHTML = `<span class="error">🙊 Oops! Something went wrong. Please try submitting the form again later.</span>`
      });

  }
}

export default mainForm;


let spinner = document.createElement('div');
spinner.classList.add('spinner');
spinner.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
style="margin: auto; background: rgba(0, 0, 0, 0); display: block; shape-rendering: auto;" width="200px"
height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s"
      repeatCount="indefinite"></animate>
  </rect>
</g>
<g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
    </animate>
  </rect>
</g>
</svg>
`;