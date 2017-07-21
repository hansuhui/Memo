/* �������� �÷����� 

��θ� �־� ���带 ����Ѵ�

*/
$(function(){
	var isPlay = false;
	
	$.fn.SoundPlay = function(audio_src)
	{
		var audio = new Audio();
		
		
		function isSupport()
		{
			//���������� �������� üũ ��ȯ�� boolean ���ϴ� ������ wemb�� �����ؼ� �ִ´�
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
	
	$("������").SoundPlay('���� ���');
	
})