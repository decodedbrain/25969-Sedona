(function() {

  var input = document.querySelectorAll('.counter-input');
  var plus = document.querySelectorAll('.plus');
  var minus = document.querySelectorAll('.minus');

  for (var i=0; i < input.length; i++) {
    input[i].addEventListener('change', function(event) {
      var input = this;
      var number = parseInt(input.value);

      if (isNaN(number)) {
        input.value = 0;
      } else {
        input.value = number;
      }
    });
  }

  for (var i=0; i < minus.length; i++) {
    minus[i].addEventListener('click', function(event) {
      event.preventDefault();

      var container = this.parentNode;
      var input = container.querySelector('.counter-input');

      input.value++;
    });
  }

  for (var i=0; i < plus.length; i++) {
    plus[i].addEventListener('click', function(event) {
      event.preventDefault();

      var container = this.parentNode;
      var input = container.querySelector('.counter-input');

      if (input.value > 1) {
        input.value--;
      } else if (input.name == 'children-count' && input.value > 0) {
        input.value--;
      }
    });
  }

})();