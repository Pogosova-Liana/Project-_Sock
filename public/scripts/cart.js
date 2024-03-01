const cartContainer = document.querySelector('.cartItem');
const doneOrder = document.querySelector('.done-order');

if (cartContainer) {
  cartContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('show-order')) {
      const card = e.target.closest('.cartItem');
      const { id } = card.dataset;
      // console.log(id);
      const res = await fetch(`/api/cart/orders/${id}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      // console.log(data);
      if (data.message === 'success') {
        document
          .querySelector('.cartItem')
          .insertAdjacentHTML('beforeend', data.html);
      }
    }
  });
}
if (doneOrder) {
  doneOrder.addEventListener('click', async (e) => {
    alert('Ваш заказ принят. Скоро с вами свяжется менеджер');
  });
}
