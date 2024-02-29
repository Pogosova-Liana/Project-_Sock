const btnStart = document.querySelector('.btn_start');
const sockSelect = document.querySelector('.sock-select');
const container = document.querySelector('.sock-container');

if (btnStart) {
  btnStart.addEventListener('click', () => {
    window.location.assign('/sock-generator');
  });
}

if (sockSelect) {
  sockSelect.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { color, design, photo } = e.target;

    const data = {
      color: color.value,
      design: design.value,
      photo: photo.value,
    };
    const response = await fetch('/api/sock-generator', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
    if (res.message === 'success') {
      document.querySelector('.sock-card').remove();
      document
        .querySelector('.sock-container')
        .insertAdjacentHTML('beforeend', res.html);
    }
  });
}

if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('to-favorite')) {
      const card = e.target.closest('.sock-card');
      const { id } = card.dataset;
      const res = await fetch(`/api/sock-generator/${id}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        alert('Успешно добавили в избранное');
      }
    }
  });
}
