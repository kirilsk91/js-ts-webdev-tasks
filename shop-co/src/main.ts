import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div class="red-container">
  Red container text
  </div>

  <div class="green-card">
    Green card content
  </div>

  <div class="blue-footer">
    Footer text
  </div>
`;
