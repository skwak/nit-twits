$(function() {


    $('#twitter-handle').click(function() {
      var handle = $('#handle').val();
      $.post('/twitter-handle'), { handle: handle }, function(data) {
        if (data === 'done') {
          alert("success!");
        }
    })
});
