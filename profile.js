function search(value) {

    if(value.length == '')
    {
      $("#results").html("");

    }  else {
      $.post("employees.php", {search:value}, function(data){
          $("#results").html(data);
       
        });
     
    }
}
