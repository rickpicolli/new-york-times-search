
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=baseball&begin_date=20170122&end_date20180122&page=1&api-key=56ecf82733b643d8901b034d3a880683
$("#search").on("click", function() {

	var searchQuery = "baseball"//$("#inputOne").val() // input value
	var beginDate =  "20170122" //|| $("#date1").val();// input value
	var recordnum =  1 //$("#input4").val(); // input value
	var endDate =  "20180122" //|| $("#date2").val(); //input value.

	var key = "&api-key=56ecf82733b643d8901b034d3a880683";
	var myUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	var queryURL = myUrl+"q="+searchQuery+"&begin_date=" + beginDate + "&end_date=" + endDate + key;
	// var queryURL = myUrl+"q="+searchQuery + key;

	$.ajax({
		url: queryURL,
      	method: "GET"
	})
	.then(function(response){
		//console.log(response.response.docs);
		var results = response.response.docs;
		console.log(results[0].snippet)
		for( var i = 0; i < results.length; i++){
			console.log(results[i]);
			// var snippet = $("<p>");
			// // var myJSON = JSON.stringify(results[i]);
			// snippet.text(results[i].snippet);
			// $("#results").append(snippet);

			var panel = $("<div>");
			panel.addClass("panel panel-default");
			var panelBody = $("<div>");
			panelBody.addClass("panel-body");
			panelBody.text(results[i].snippet);
			$(panel).append(panelBody);
			$("#results").append(panel);



			//appenf panel


		}

	})
});

/*
	when a user clicks search 
	get user input values 
	add the values to our query string 
	search our query string
	do something with the result

*/