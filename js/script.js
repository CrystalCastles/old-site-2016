$(document).ready(function () {
  $(document).on("click", "button", function () {
    $(this).blur();
  });

  $(document).on("click", "#contact-btn", function () {
    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var message = $("#contact-message").val();
    var response = "";

    if(name == "") { response += "You need to enter a name.\n" }
    if(email == "" || ValidateEmail(email) == false) { response += "You need to enter a valid email.\n"; }
    if(message == "") { response += "You need to enter a message."; }

    if(response == "") {
      $.post("functions/send.php", {name: name, email: email, message: message}, function (data) {
        data = JSON.parse(data);
        if(data == 0) {
          alert("Thanks!");
          $("#contact-name").val("");
          $("#contact-email").val("");
          $("contact-message").val("");
        } else {
          alert("Something went wrong.");
        }
      });
    } else {
      alert(response);
    }
  });
});
function ValidateEmail(email) {
  var r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return r.test(email);
}