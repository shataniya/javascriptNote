function getStyle(obj,name){
	return(getComputedStyle(obj,null)[name]);
}
				
function move(obj,attr,target,speed,callback){
					
					clearInterval(obj.timer);
					var current = parseInt(getStyle(obj,attr));
					if(current > target){
						speed = -speed;
					}
					obj.timer = setInterval(function(){
						//console.log(speed);
						var oldValue = parseInt(getStyle(obj,attr));
						var newValue = oldValue + speed;
						obj.style[attr] = newValue + "px";
						//console.log(speed > 0 && newValue > target);
						if((speed > 0 && newValue > target)||(speed < 0 && newValue < target)){
							newValue = target;
							obj.style[attr] = newValue + "px";
							clearInterval(obj.timer);
							
							//动画执行完毕,调用回调函数
							callback && callback();//这种写法很创新,然人眼前一亮
							//有回调函数的时候就使用,没有的时候就不使用
							/* 
							 *	因为是函数，所以有无限种可能，可以通过函数的嵌套实现多个动画效果
							 * 	所以回调函数很重要，有画龙点睛的作用
							 */
							
						}
						//console.log(speed);
						//console.log(obj.style[attr]);
						/* if(oldValue < target){
							var newValue = oldValue + speed;
							obj.style[attr] = newValue + "px";
							console.log(obj.id+" = "+obj.style[attr]);
							if(newValue >= target){
								obj.style[attr] = target + "px";
								console.log(obj.id+" = "+obj.style[attr]);
								clearInterval(obj.timer);
							}
						}
						if(oldValue > target){
							var newValue = oldValue - speed;
							obj.style[attr] = newValue + "px";
							console.log(obj.id+" = "+obj.style[attr]);
							if(newValue <= target){
								obj.style[attr] = target + "px";
								console.log(obj.id+" = "+obj.style[attr]);
								clearInterval(obj.timer);
							}
						} */
					},30);
					
				};									
function delay(time){
	var count = 0;
	clearInterval(timer);
	var timer = setInterval(function(){
		count++;
		if(count == time+1){
			clearInterval(timer);
		}
	},1000);
};