/**
 * http://usejsdoc.org/
 */


function doLog(request,response,next){
	
	var start=+new Date();
	var out=process.stdout;
	var url=request.url;
	var method=request.method;
	
	response.on('finish',function(){
		var duration=new Date()-start;
		var message=method+' to '+url +" \ntook "+duration+" ms \n\n";
		out.write(message);
	});
	
	next();
	
}

module.exports=doLog;