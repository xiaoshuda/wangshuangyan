$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	/* Defining an array with the tab text and AJAX pages: */
	$.ajax({
    	type:"POST",
        url:"entityData.html",
       // url:"../Controller",
	    data:{'flag':'entity'},
        dataType:'text',
        success:function(data){
            eval('var returnData = '+data);
            var originalHTML = '';
            originalHTML += '<p class="vright">'+ returnData['text'] +'</p>';
            $('#original').html(originalHTML);
			
			$('#mytext').html(returnData['token']);
			
			var Tabs = {
				'人名':'',
				'地名':'',
				'组织':'',
				'日期':'',
				'时间':'',
				'货币':'',
				'电话':'',
				'邮箱':'',
				'百分比':''
			};
			var typeMap = {'Person':'人名','Location':'地名','Organization':'组织','Date':'日期','Time':'时间','Money':'货币','Phonenumber':'电话','Email':'邮箱','Percent':'百分比'};
			var text = returnData['text'];
			var entity = returnData['entities'];
			for(var type in entity ){
				var position = entity[type];
				for(var j =0;j<position.length;j++){
					var string = position[j]; 
					var element = string.split("-");
					var word = text.slice(element[0],element[1]);
					if(!Tabs[typeMap[type]]){
						Tabs[typeMap[type]] = '';
					}
					Tabs[typeMap[type]] = Tabs[typeMap[type]] + word + '，';
					
				}
				if(Tabs[typeMap[type]]){
					Tabs[typeMap[type]] = Tabs[typeMap[type]].substring(0,Tabs[typeMap[type]].length-1);
				}
			}
			
			/* The available colors for the tabs: */
			var colors = ['blue','green','orange','red'];
			
			/* The colors of the line above the tab when it is active: */
			var topLineColor = {
				blue:'lightblue',
				green:'lightgreen',
				red:'red',
				orange:'orange',
				gray:'gray'
			}
			
			/* Looping through the Tabs object: */
			var z=0;
			$.each(Tabs,function(i,j){
				/* Sequentially creating the tabs and assigning a color from the array: */
				if(j != ''){
					var tmp = $('<li><a href="#" class="tab '+colors[(z++%4)]+'">'+i+' <span class="left" /><span class="right" /></a></li>');
				}else{
					var tmp = $('<li><a href="#" class="tab gray">'+i+' <span class="left" /><span class="right" /></a></li>');
				}
				/* Setting the page data for each hyperlink: */
				tmp.find('a').data('data',j);
				
				/* Adding the tab to the UL container: */
				$('ul.tabContainer').append(tmp);
			})

			/* Caching the tabs into a variable for better performance: */
			var the_tabs = $('.tab');
			
			the_tabs.click(function(e){
				/* "this" points to the clicked tab hyperlink: */
				var element = $(this);
				if(element.data('data') == ''){
					return false;
				}
				/* If it is currently active, return false and exit: */
				if(element.find('#overLine').length) return false;
				
				/* Detecting the color of the tab (it was added to the class attribute in the loop above): */
				var bg = element.attr('class').replace('tab ','');

				/* Removing the line: */
				$('#overLine').remove();
				
				/* Creating a new line with jQuery 1.4 by passing a second parameter: */
				$('<div>',{
					id:'overLine',
					css:{
						display:'none',
						width:element.outerWidth()-2,
						background:topLineColor[bg] || 'white'
					}}).appendTo(element).fadeIn('slow');			
		
				$('#contentHolder').html(element.data('data'));
				e.preventDefault();
			})
			
			/* Emulating a click on the first tab so that the content area is not empty: */
			the_tabs.eq(0).click();
         } 
    })
	
});
