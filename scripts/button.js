let total = 0;

function addDogCost(cost) {
  total = total + Number(cost);
  $('#total').text('$ ' + Number(total));
}

function alertDogInfo (name, breed, fees) {
  alert(`Name: "${name}", Breed: "${breed}", Fees: $${fees}`);
}

$(function(){
  $('.dog-detail').mouseenter(function(){
    $(this).toggleClass('dog-detail-hover');
  }).mouseleave(function(){
    $(this).toggleClass('dog-detail-hover');
  })
})

