var canvas = document.getElementById('canvas')
var button = document.getElementById('button')
var save = document.getElementById('save')
var clearAll = document.getElementById('clearAll')
var context=canvas.getContext('2d')
var previousPiont

canvas.width=document.documentElement.clientWidth
canvas.height=document.documentElement.clientHeight-40

canvas.addEventListener('touchmove',function(e){
  e.preventDefault()

  var pen = document.querySelector('input[name="penType"]:checked').value
     
  var pageX=e.touches[0].pageX
  var pageY=e.touches[0].pageY
  if(pen==='pen'){
    if(previousPiont){ 
       context.strokeStyle='green'
       context.beginPath()
       context.moveTo(previousPiont.pageX,previousPiont.pageY)
       context.lineTo(pageX,pageY)
       context.stroke()    
    }
    previousPiont={'pageX':pageX,'pageY':pageY}
  }else if(pen==='eraser'){
    
    context.clearRect(pageX-5, pageY-5, 10, 10)
  }
   
})

canvas.addEventListener('touchend', function(){
  previousPiont = null
})

save.onclick = function(){
  var canvas=document.getElementById("canvas");
  var data=canvas.toDataURL("image/png");
  var newWindow=window.open('about:blank','image from canvas');
  newWindow.document.write("<img src='"+data+"' alt='from canvas'/>");
}

clearAll.onclick=function(){
  context.clearRect(0,30,canvas.width,canvas.height)
}