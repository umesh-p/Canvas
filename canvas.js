
 var p=0,q=0.25;
      var a=0,b=1.75;
      var color=["red","green","yellow","blue"];
      for(var i=0;i<4;i++)
      {
      
      var canvas = document.getElementById('myCanvas');
      
      var context = canvas.getContext('2d');
       context.strokeStyle = '#ff0000';
      context.beginPath();
      context.moveTo (100,100);
      context.lineTo(100+(100*Math.cos(Math.PI*p)),100-(Math.sin(Math.PI*p))*100);
      context.stroke();
      context.arc(100, 100, 100,a* Math.PI,b* Math.PI,true);
      context.lineWidth = 1;
      context.fillStyle = color[i]; 
      context.stroke();
	  context.fill()
      context.moveTo(100+(100*Math.cos(Math.PI*(q))),100-(Math.sin(Math.PI*(q)))*100);
      context.lineTo(100, 100);
      context.stroke();
      a=b;
      b=a-0.25;  
      p=q;
      q=p+0.25;
      }
	  
function rgb2hex(rgb){
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}
$(document).ready(function(){
  $.fn.rgbaClick=function(f){
		return this.click(function(e){
			var ctx=$('<canvas>').attr({width:this.width,height:this.height})[0].getContext('2d');
			ctx.drawImage(this, 0, 0, this.width, this.height);
			e.rgb=ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data
			f.call(this,e)
		})
}
$('#myCanvas').rgbaClick(function(e){
			var color =rgb2hex(e.rgb);
			
			if(color=="#00ffff")
			{
				$('#right1').css("right","0px");
				$('#right2').css("right","-200px");
				$('#right3').css("right","-200px");
				$('#right4').css("right","-200px");
				
			}
			if(color=="#ff00ff")
			{
				$('#right1').css("right","-200px");
				$('#right2').css("right","0px");
				$('#right3').css("right","-200px");
				$('#right4').css("right","-200px");
			}
			if(color=="#8000ff")
			{
				$('#right1').css("right","-200px");
				$('#right2').css("right","-200px");
				$('#right3').css("right","0px");
				$('#right4').css("right","-200px");
			}
			if(color=="#0000ff")
			{
				$('#right1').css("right","-200px");
				$('#right2').css("right","-200px");
				$('#right3').css("right","-200px");
				$('#right4').css("right","0px");
			}
});

});
	
	  

	  
