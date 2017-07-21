
/*
 *  사용법	
 * 	$("#navigation").lavalamp(
			{
			이처럼 속성 조절 가능 
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
			
			
			var $nav = $(this), //nav 변수에 내비게이션을 설정
			$current_item = $nav.find(".focus"), // 그안에서 .focus를 찾는다
			$lava =$('<li class="lava"/>'); // lava 변수 안되 동적으로 생성한 클래스를 참조
			
			
			$nav.css('position','relative')// 상대위치로 지정
			.find('a').css({
				position : 'relative' //내부 a 를 찾아 상대 위치로 지정
					,zIndex : 1 // z축의 높이를 1로 설정합니다
			});
			
			$lava.appendTo($nav.find('ul')); /*$nav에서 찾은 <ul> 내부의 맨 뒤에 $lava를 삽입합니다.*/
			
			
			
			$lava.css({ // $lava 참조 객체의 .css() 메서드를 사용하여 스타일링 합니다.
				width: $current_item.outerWidth() // 가로폭을 .focus의 가로폭 (width+padding+border)만큼설정
				,backgroundColor: options.bgColor  // 배경색 설정
					,position: 'absolute'
						,top : $current_item.position().top - options.gap/2
						,left :  $current_item.position().left
			}).appendTo($nav.find('ul'));
			
			$lava.css('height',$current_item.outerHeight() +options.gap);
			
			
			$nav.find('li').bind('mouseover focusin',function(){
				$lava.animate({
					left : $(this).position().left //현제 작동된 li의 left 위를 설정
					,width : $(this).outerWidth() //현제 작동된 li의 Width 을 설정
				},{
					duration:options.sleep // 애니메이션 지속 시간을 400ms (0.4초)
					,easing : options.easing // 애니메이션 이징 곡선을 탄력 움직음으로 설정
					,queue:false // 애니메이션 큐 설정 값을 false 설정 큐란 기존 애니메이션이 끝나기를 기다리지 않고 새 애니매이션을 동시 실행하는것
				});
			}).bind('mouseout focusout',function(){
				
				setTimeout(function(){
					$lava.animate(
							{
								left : $current_item.position().left //focus로 left 위치를 설정
								,width : $current_item.outerWidth() //focus로  li의 Width 을 설정
							},200);
					
				},options.reset);
			});
			
		});
		
	};