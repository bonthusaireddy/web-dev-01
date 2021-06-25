const panels = document.querySelectorAll('.panel');
console.log('🚀 ~ file: script.js ~ line 2 ~ panels', panels);
const images = [
  'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
  'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
];
let i = 0;

panels.forEach(function (item) {
  console.log(images[i]);
  item.style.background = `url(${images[i]})`;
  item.addEventListener('mouseover', function () {
    mouseOver(item);
  });
  item.addEventListener('mouseout', function () {
    mouseOut(item);
  });
  i++;
});

function mouseOver(item) {
  // item.style.color = 'red';
  item.classList.add('active');
  console.log('🚀 ~ file: script.js ~ line 26 ~ mouseOver ~ item', item);
}

function mouseOut(item) {
  item.classList.remove('active');
  console.log('🚀 ~ file: script.js ~ line 32 ~ mouseOut ~ item', item);
  // item.style.color = 'black';
}
