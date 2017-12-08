$(document).ready(function() {
  $('#form').on('submit',function(e) {
    var name    = document.getElementById('nameinput')
    var email   = document.getElementById('emailinput')
    var message = document.getElementById('textinput')

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please make sure the form is filled out.");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/sirmayday98@gamil.com',
        data: $('#form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Email sent");
    }
  });
});
