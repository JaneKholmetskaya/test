$(document).ready(function() {
  $("#form").submit(function(e) {
    var form = $(this);
    var data = form.serialize();
    console.log(data);
    // $.ajax({
    //   type: "POST",
    //   url: "send.php",
    //   data: data,
    //   success: function() {
    //     alert("Ваше сообщение отправлено!");
    //   },
    //   error: function() {
    //     alert("Ваше сообщение не отправлено!");
    //   }
    // });
    e.preventDefault();
  });
});
