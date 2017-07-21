/* 제이쿼리 플러그인 

경로를 넣어 사운드를 재생한다

*/
$(function(){
	var isPlay = false;
	
	$.fn.SoundPlay = function(audio_src)
	{
		var audio = new Audio();
		
		
		function isSupport()
		{
			//지원가능한 형식인지 체크 반환은 boolean 원하는 형식은 wemb를 변경해서 넣는다
			return !!document.createElement('audio').canPlayType('audio/wemb');
		}
		
		
		audio.src =audio_src;
		
		return this.each(function(){
			$(this).click(function(){
				if(!isPlay){
					audio.load();
					audio.play();
					isPlay= true;
				}else
				{
					audio.pause();
					audio.currentTime = 0;
					isPlay = false;
				}
			});
		}) ;
		
	};
	
	$("선택자").SoundPlay('음원 경로');
	
})