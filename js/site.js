$(document).ready(function() {
  $('#form').on('submit',function(e) {
    var name    = document.getElementById('nameinput')
    var email   = document.getElementById('emailinput')
    var message = document.getElementById('textinput')


    if (!name.value || !email.value || !message.value) {
      status.textContent =  "Please fill all the fields.";
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
      status.textContent = "done";
    }
  });
});
