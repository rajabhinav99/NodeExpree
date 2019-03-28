 setInterval(function(str1,str2){
    console.log(str1+" "+str2);
},2000,"charming morning","How are you?")
 setTimeout(function(str1, str2) {
    console.log(str1 + " " + str2); 
  }, 1000, "Morning.", "How are you?");
var timeOut = setTimeout(function(str1, str2) {
    console.log(str1 + " " + str2);
  }, 1000, "Hello.", "How are you?");
  
  clearTimeout(timeOut);