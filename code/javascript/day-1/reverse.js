 var newString = ""; 
      var string = "PRAVIN YADAV"; 
      var counter = string.length; 
      for (counter  ;counter > 0 ;counter -- ) { 
         newString = newString + string.substring(counter-1, counter); 
      } 
      console.log(newString);