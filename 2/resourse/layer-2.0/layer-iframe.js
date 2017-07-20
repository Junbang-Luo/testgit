/** layer extended iframe
 * by zsy
 */
function iframe($handler) {
	$(document).on("click", $handler, function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		var title = $(this).attr("data-title");
		
		if(title == null) {
			title = $(this).html();
		}
		
	    layer.open({
	        type: 2,
	        title: title,
	        area: ['700px', '530px'],
	        maxmin: true,
	        content: url
	    });
	});
}

function iframeCloseSelf() {
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

$(function(){
	iframe(".layer-iframe");
});