var guests= [];
function submit()
{ for(var j=1;j <= 4; j++ )
   {
    var name_of_guest= document.getElementById("name_of_guest_"+j ).value;
    console.log(name_of_guest);
    guests.push(name_of_guest);
   }
   console.log(guests);
 var length_of_guest_array= name_of_the_guest_array.length;
 console.log(length_of_guest_array);

    var display_guest_array=[];

 for( var k=0;k< length_of_guest_array ; k++ )
 {
   display_guest_array.push("<h4> NAME-" +guests[k]+ " </h4> ");
   console.log(display_guest_array);
 }
}
  
    

 