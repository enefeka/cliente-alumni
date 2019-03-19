$(document).ready(function(){
    $("#result").hide();
  $('#log-submit').click(function() {
     var email = $('#email').val();
     var password = $('#password').val();
     // if(email == "" || name == ""){
     //    $("#result").show();
     //    $("#result").html("Falta por rellenar alguno de los dos campos");
     //  }
         $.ajax({
           type: "POST",
           url: "http://localhost:8888/ProyectoAlumni/public/api/login",
           data: {
            email: email,
            password: password,
           },
           cache: false,
           
           success: function(response){
            if (response.code == 400) {
              $("#result").show();
              $("#result").html(response.message);
            }
            if (response.data.user.id_rol != 1) {
              $("#result").show();
              $("#result").html("No estás autorizado.");
            }
              console.log(response.data.token);
              console.log(response.data.user.id_rol);
             if (response.data.user.id_rol == 1) {
                 sessionStorage.setItem("token",response.data.token);
                  window.location.href='welcome.html'
             }

          },
           error: function(response){
              $("#result").show();
              $("#result").html(response.message);
           }

        });

   return false;
   });
});


 