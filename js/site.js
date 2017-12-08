$('#form').on('submit', function(e){
    var username = $('#nameinput').val();
    var useremail = $('#emailinput').val();
    var userquestion = $('#textinput').val();
    var Confirmation = document.getElementById("confirmation");
    var fill = "Please fill in all the fields displayed above";
    var troll = "HAH JK, I PLAY on Steam Actually. PC for the win always!";
    e.preventDefault();
    if (name === '' || email === '' || question === '') {
      status.textContent = fill;
      document.getElementById("confirmation").style.color = 'black';

    } else{
      console.log("Submission Completed", name, email, question);
      status.textContent = troll;
      document.getElementById("confirmation").style.color = 'skyblue';
    }

});
