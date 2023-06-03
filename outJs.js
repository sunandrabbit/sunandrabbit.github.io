$(document).ready(function(){

    var hash = window.location.hash.substring(1)
	if (hash == "") {
		hash = "home";
	}
    hashCheck(hash);
    
    $('.menu-btn').click(function(){
        $('.menu-btn').toggleClass('active');
        $('.menu-list').toggleClass('active');
    });

   
});


function hashCheck(hash){
    if(hash){
        $(".section").hide(); // 모든 팝업을 숨긴다
        $("#section-"+hash).show(); // 해시네임의 팝업을 보여준다
    }
}