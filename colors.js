var Body = {
    
    // body태그의 글자색 변경

 setColor: function(color) { 
    $('body').css('color', color);
   // document.querySelector('body').style.color = color;
},
    // body태그의 배경색 변경

 setBackgroundColor: function(color) {  
   
    $('body').css('backgroundColor', color);
   // document.querySelector('body').style.backgroundColor = color;
}
            }           
var Links = {
    // a 태그 글자색 변경
setColor: function(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
  alist[i].style.color = color;
  i = i + 1;
  }
  }
  }


function nightDayHandler(self) {

    // var target = document.querySelector('body');

        if (self.value === 'night') { 
           Body.setBackgroundColor('black');
           Body.setColor('white');
           self.value = 'day'
           
           Links.setColor('powderblue')
            } 
        else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night'
            
            Links.setColor('coral')
            }
}