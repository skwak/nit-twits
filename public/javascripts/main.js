$(function() {
  $("#handleButton").click(function() {
    submit(event);
  });
});

function submit(event) {
  event.preventDefault();
  var $handle = $('#handle').val();
  console.log($handle);
}
