<script>
$document.ready(function(){
        $('#searchb').on('click', Ask());
    
    //alert('n');
});

function Ask(){
    
if ($('#searchf').val()==''){
        alert('Enter a word.');
    }
    
    else
    var httpRequest = new XMLHttpRequest();
	var url='request.php='+$('#searchf').val();
	httpRequest.onreadystatechange=Response();
	httpRequest.open('GET',url);
	httpRequest.send();
};


	function Response(){
		if (this.readyState === XMLHttpRequest.DONE) {
	 		if (this .status === 200) {
	 			var response = this .responseText;
	 			$('#searchf').val('');
	 			$('#result').html(response);
		 	} 
		 	else {
		 		alert('The request had an error.');	 
		 	}
		}
	}
</script>