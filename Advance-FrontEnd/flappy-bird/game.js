/* global jQuery */
// Dựa trên cấu trúc bird/pole, tính va chạm và ý tưởng điều khiển của bài Freetuts.
// Viết lại vòng lặp để sửa lỗi clearInterval(playGame()) và hỗ trợ level.
(function($){'use strict';
 var running=false,paused=false,won=false,up=false,timer=null,raf=null,last=0;
 var points=0,level=1,interval=40,x=0,y=0,velocity=0,gapY=0,gap=0,scored=false,best=0;
 var $field=$('#container'),$bird=$('#bird'),$top=$('#pole_1'),$bottom=$('#pole_2');
 function config(score){return score>=40?{level:4,interval:20}:score>=20?{level:3,interval:25}:score>=5?{level:2,interval:30}:{level:1,interval:40};}
 function size(){return {w:$field.innerWidth(),h:$field.innerHeight(),pw:$top.outerWidth(),bw:$bird.outerWidth(),bh:$bird.outerHeight()};}
 function display(){ $('#level').text('Level '+level);$('#score').text(points+' / 50');$('#speed').text('Interval: '+interval+' ms');$('#best').text('Kỷ lục: '+best); }
 function resetPole(){var s=size();gap=Math.max(160,s.h*.44);var margin=65;var available=Math.max(0,s.h-gap-2*margin);gapY=margin+Math.random()*available;x=s.w+25;scored=false;$top.height(gapY);$bottom.height(Math.max(0,s.h-gapY-gap));}
 function stopLoops(){clearInterval(timer);timer=null;cancelAnimationFrame(raf);raf=null;last=0;}
 function finish(victory){running=false;won=victory;up=false;stopLoops();if(points>best){best=points;try{localStorage.setItem('gocsach-flappy-best',String(best));}catch(e){}}display();$('#message').text(victory?'Chiến thắng!':'Chuyến bay đã kết thúc');$('#summary').text(victory?'Bạn đã đạt 50 điểm và hoàn thành cả 4 level.':'Bạn đạt '+points+' điểm. Nhấn Chơi lại để thử tiếp.');$('#overlay').prop('hidden',false);$('#play_btn').prop('hidden',true);$('#restart_btn').prop('hidden',false);}
 function startTimer(){clearInterval(timer);timer=setInterval(tick,interval);}
 function tick(){if(!running||paused)return;var s=size();
 // Chỉ cộng sau khi cạnh phải của cặp cột vượt qua cạnh trái của chim.
 if(!scored&&x+s.pw<s.w*.19){scored=true;points++;if(points>=50){points=50;finish(true);return;}var c=config(points);if(c.level!==level){level=c.level;interval=c.interval;startTimer();}display();}
 if(x < -s.pw)resetPole();}
 function render(time){if(!running||paused)return;var s=size();var dt=last?Math.min((time-last)/1000,.035):0;last=time;
 // Vật lý theo thời gian, độc lập tốc độ lặp bàn phím và tốc độ cột.
 x-=(10000/interval)*dt;
 velocity+= (up?-850:650)*dt;velocity=Math.max(-210,Math.min(240,velocity));y+=velocity*dt;
 var bx=s.w*.19;var overlap=bx+s.bw>x&&bx<x+s.pw;
 if(y<=48||y+s.bh>=s.h||(overlap&&(y<gapY||y+s.bh>gapY+gap))){finish(false);return;}
 $bird.css({transform:'translate3d('+bx+'px,'+y+'px,0) rotate('+Math.max(-15,Math.min(25,velocity/12))+'deg)',left:0,top:0});$('.pole').css('left',x);raf=requestAnimationFrame(render);}
 function start(){stopLoops();points=0;level=1;interval=40;up=false;paused=false;won=false;running=true;var s=size();y=s.h*.45;velocity=0;resetPole();display();$('#overlay').prop('hidden',true);$field.trigger('focus');startTimer();raf=requestAnimationFrame(render);}
 function togglePause(){if(!running)return;if(paused){paused=false;$('#overlay').prop('hidden',true);last=0;startTimer();raf=requestAnimationFrame(render);}else{paused=true;up=false;stopLoops();$('#message').text('Tạm dừng');$('#summary').text('Nhấn P hoặc nút Tiếp tục để tiếp tục chuyến bay.');$('#play_btn,#restart_btn').prop('hidden',true);$('#overlay').prop('hidden',false);}}
 $(document).on('keydown',function(e){if(e.key==='ArrowDown'){e.preventDefault();if(running&&!paused)up=true;}if((e.key==='p'||e.key==='P')&&!e.repeat)togglePause();}).on('keyup',function(e){if(e.key==='ArrowDown'){e.preventDefault();up=false;}});
 $(window).on('blur',function(){up=false;if(running&&!paused)togglePause();}).on('resize',function(){if(running&&!paused)togglePause();});
 $('#play_btn,#restart_btn').on('click',start);$('#pause_btn').on('click',togglePause);
 try{best=Math.max(0,Number(localStorage.getItem('gocsach-flappy-best'))||0);}catch(e){}display();
 // Hàm thuần để kiểm tra các mốc level; không có chức năng cộng điểm hoặc bỏ va chạm.
 if(typeof module!=='undefined'&&module.exports)module.exports={config:config};
}(jQuery));
