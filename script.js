const carts = document.querySelectorAll('.cart');



function startrotate(event) {
    const cartItem = this.querySelector('.cartItem');
    const halfHeight = cartItem.offsetHeight/2;
    const halfWidth = cartItem.offsetWidth/2;
    cartItem.style.transform = `rotateX(${-(event.offsetY-halfHeight)*0.2}deg) rotateY(${(event.offsetX-halfWidth)*0.2}deg)`;
}
function stopRotate(){
  const cartItem = this.querySelector('.cartItem');
  cartItem.style.transform = `rotateX(20deg)`;
}

for (var i = 0; i < carts.length; i += 1) {
  let cart = carts[i];
  cart.addEventListener('mousemove', startrotate);
  cart.addEventListener('mouseout', stopRotate);
}
