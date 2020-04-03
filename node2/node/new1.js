<script>
			$(function() {
				//搜索切换
				(function() {
					var aLi = $('#menu li');
					var oText = $('.form').find('.text');
					var arrText = [
						'AAAAAAAAAAAAAA',
						'bbbbbbbbbbbbbb',
						'cccccccccccccc',
						'dddddddddddddd',
						'ffffffffffffff',
					];
					var iNow = 0;
					oText.val(arrText[iNow]);
					aLi.each(function(index) {
						//console.log(index)
						$(this).click(function() {
							aLi.attr('class', 'gradient');
							$(this).attr('class', 'active');
							iNow = index;
							oText.val(arrText[iNow]);
						});

					});
					oText.focus(function(){
						//console.log(arrText[iNow]);
						if($(this).val()==arrText[iNow]){
							$(this).val('');
							
						}
					});
					
					oText.blur(function(){
						if($(this).val()==''){
							oText.val(arrText[iNow]);
							
						}
						
					});

				})();
			
			
			//update
			(function(){
				var oDiv=$('.update');
				var oUl=oDiv.find('ul');
				var iH=0;
				//console.log(iH);
				
			var arrData=[
		{'name':'aa','time':5,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013'},
		{'name':'bb','time':7,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013'},
		{'name':'cc','time':8,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013'},
		{'name':'dd','time':10,'title':'那些灿烂华美的瞬间','url':'http://www.miaov.com/2013'},
		];
		var str='';
		var oBtnUp=$('#updataUpBtn');
		var oBtnDown=$('#updataDownBtn');
		var iNow=0;
		var timer=null;
			for(var i=0;i<arrData.length;i++){
				str +='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'</span>写了一篇新文章：'+arrData[i].title+'···</a></li>';
			}
			oUl.html(str);
			iH=oUl.find('li').height();
			oBtnUp.click(function(){
				doMove(-1);
			});
			oBtnDown.click(function(){
				doMove(1);
			});
			
			function autoPlay(){
				timer = setInterval(function(){
					doMove(-1);
				},2000);
			}
			autoPlay();
			
			function doMove(num){
				iNow+=num;
				if(math.abs(iNow)>arrData.length-1){
					iNow=0;
				}
				if(iNow>0){
					iNow = -(arrData.length-1);
				}
				oUl.stop().amimate({'top':iH*iNow},3000,'elasticOut');
			}
			})();
			
		});	
		//options选项卡切换
		(function(){
			fnTab($('.tabNav1'),$('.tabCon1'));
			fnTab($('.tabNav2'),$('.tabCon2'));
			
			function fnTab(oNav,aCon){
				var aElem = oNav.children();
				aCon.hide().eq(0).show();
				aElem.each(function(index){
					$(this).click(function(){
						aElem.removeClass('active').addClass('gradient');
						$(this).removeClass('gradient').addClass('active');
						aElem.find('a').attr('class','triangle_down_gray');
						$(this).find('a').attr('class','triangle_down_red');
						aCon.hide().eq(index).show();
					});
				});
			}
		})();
			
		</script>