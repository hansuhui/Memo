
/*
 *  ����	
 * 	$("#navigation").lavalamp(
			{
			��ó�� �Ӽ� ���� ���� 
				gap:50
				,bgColor:'#00000'
			});
			
 * */

$.fn.lavalamp = function(options)
	{
		options=$.extend(
				{
					gap:20,
					sleep :400,
					easing : 'easeInOutElastic',
					reset:2000,
					bgColor : '#eee'
				},options);		

		return this.each(function(){
			
			
			var $nav = $(this), //nav ������ ������̼��� ����
			$current_item = $nav.find(".focus"), // �׾ȿ��� .focus�� ã�´�
			$lava =$('<li class="lava"/>'); // lava ���� �ȵ� �������� ������ Ŭ������ ����
			
			
			$nav.css('position','relative')// �����ġ�� ����
			.find('a').css({
				position : 'relative' //���� a �� ã�� ��� ��ġ�� ����
					,zIndex : 1 // z���� ���̸� 1�� �����մϴ�
			});
			
			$lava.appendTo($nav.find('ul')); /*$nav���� ã�� <ul> ������ �� �ڿ� $lava�� �����մϴ�.*/
			
			
			
			$lava.css({ // $lava ���� ��ü�� .css() �޼��带 ����Ͽ� ��Ÿ�ϸ� �մϴ�.
				width: $current_item.outerWidth() // �������� .focus�� ������ (width+padding+border)��ŭ����
				,backgroundColor: options.bgColor  // ���� ����
					,position: 'absolute'
						,top : $current_item.position().top - options.gap/2
						,left :  $current_item.position().left
			}).appendTo($nav.find('ul'));
			
			$lava.css('height',$current_item.outerHeight() +options.gap);
			
			
			$nav.find('li').bind('mouseover focusin',function(){
				$lava.animate({
					left : $(this).position().left //���� �۵��� li�� left ���� ����
					,width : $(this).outerWidth() //���� �۵��� li�� Width �� ����
				},{
					duration:options.sleep // �ִϸ��̼� ���� �ð��� 400ms (0.4��)
					,easing : options.easing // �ִϸ��̼� ��¡ ��� ź�� ���������� ����
					,queue:false // �ִϸ��̼� ť ���� ���� false ���� ť�� ���� �ִϸ��̼��� �����⸦ ��ٸ��� �ʰ� �� �ִϸ��̼��� ���� �����ϴ°�
				});
			}).bind('mouseout focusout',function(){
				
				setTimeout(function(){
					$lava.animate(
							{
								left : $current_item.position().left //focus�� left ��ġ�� ����
								,width : $current_item.outerWidth() //focus��  li�� Width �� ����
							},200);
					
				},options.reset);
			});
			
		});
		
	};