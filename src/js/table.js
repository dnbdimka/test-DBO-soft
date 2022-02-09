const refs = {
  table: document.querySelector('.table'),
  total: document.querySelector('#total'),
};

const onHandleChange = e => {
  const input = e.target;
  if (input.tagName === 'INPUT') {
    const tr = input.parentElement.parentElement;
    const result = tr.querySelector('#price').value * tr.querySelector('#quantity').value;
    tr.querySelector('#subtotal').textContent = result.toFixed(2);
  }
  let sum = 0;
  for (let i = 1; i < refs.table.rows.length - 1; i++) {
    let row = refs.table.rows[i].cells[3];
    sum += Number(row.textContent);
  }
  refs.total.textContent = sum.toFixed(2);
};

refs.table.addEventListener('input', onHandleChange);
