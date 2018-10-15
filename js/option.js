$(document).ready(function() {
	var date = new Date();
	var stamp = date.getTime();
	
	var dateStr = formatDate(date);

	$("#date").val(dateStr);
	$("#stamp").val(parseInt(stamp / 1000));
	
	$("#button_stamp2date").click(function() {
		var stampVal = $("#stamp").val();
		
		var reg = /^[0-9]*$/;
		if (!reg.test(stampVal)) {
			$("#text_stamp2date").val("时间戳格式不正确！")
			return;
		}
		
		if (stampVal == "")
		{
			$("#text_stamp2date").val("");
		}
		else
		{
			$("#text_stamp2date").val(formatTimpStamp(stampVal * 1000));
		}	
	});
	
	$("#button_date2stamp").click(function() {
		var dateVal = $("#date").val();
		
		var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
		if (!reg.test(dateVal)) {
			$("#text_date2stamp").val("请输入yyyy-MM-dd HH:mm:ss的格式。")
			return;
		}
		
		if (dateVal == "")
		{
			$("#text_date2stamp").val("");
		}
		else
		{
			$("#text_date2stamp").val(new Date(dateVal).getTime() / 1000);
		}		
	});
});

function formatDate(date) {
	var year = date.getFullYear(),
		month = date.getMonth()+1,//月份是从0开始的
		day = date.getDate(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();
		
	var newTime = year + '-' +
		(month < 10? '0' + month : month) + '-' +
		(day < 10? '0' + day : day) + ' ' +
		(hour < 10? '0' + hour : hour) + ':' +
		(min < 10? '0' + min : min) + ':' +
		(sec < 10? '0' + sec : sec);

	return newTime 
}

function formatTimpStamp(timeStamp) {
	var date = new Date(parseInt(timeStamp));
	
	var year = date.getFullYear(),
		month = date.getMonth()+1,//月份是从0开始的
		day = date.getDate(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();
		
	var newTime = year + '-' +
		(month < 10? '0' + month : month) + '-' +
		(day < 10? '0' + day : day) + ' ' +
		(hour < 10? '0' + hour : hour) + ':' +
		(min < 10? '0' + min : min) + ':' +
		(sec < 10? '0' + sec : sec);

	return newTime      
}