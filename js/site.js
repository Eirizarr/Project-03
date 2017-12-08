$.noConflict();

$('#form').on('submit', function(e){
    var username = $('#nameinput').val();
    var useremail = $('#emailinput').val();
    var userid = $('#textinput').val();
    var Confirmation = document.getElementById("confirmation");
    var fill = "Please fill in all the fields displayed above";
    var troll = "HAH JK, I PLAY on PS4 Actually. PS for the win always!";
    e.preventDefault();
    if (username === '' || useremail === '' || userid === '') {
      confirmation.textContent = fill;
      document.getElementById("confirmation").style.color = 'black';
    }
    else{
      console.log("Submission Completed", username, useremail, userid);
      confirmation.textContent = troll;
      document.getElementById("confirmation").style.color = 'skyblue';
    }
});
