(function ($) {
  $(function () {


    a = test('this', 'is', 'a', 'test');

function test(p1) {
    for (var i=0, resp=''; i< arguments.length; i++) {
        resp += ((i==0?'':' ') + arguments[i]);
    }
    console.log( resp);
}
test();
    $('#submit').on('click', function () {
      console.log('clicked!');
      getRandom();
    });

  });
}(jQuery));
