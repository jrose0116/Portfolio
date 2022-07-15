$(function(){
    $("#nav").load("nav.html", checkDark)
    $("#footer").load("footer.html", checkDark)
});

function darkToggle() {
    if(!($("#dark-toggle").is(":checked"))){
        $("#main").removeClass("dark");
        localStorage.setItem("dark","false");
    }
    else{
        $("#main").addClass("dark");
        localStorage.setItem("dark","true");
    }
}

function toggleButton() {
    $("#main").toggleClass("dark");
    if($("#main").hasClass("dark")){
        $("#darkbutton").text("Dark Mode")
        localStorage.setItem("dark","true");
    }
    else{
        $("#darkbutton").text("Light Mode")
        localStorage.setItem("dark","false");
    }
}

$(document).ready(() => $(document).on('click', '.hamburger', function(e) {
    checkDark()
    $(this).toggleClass("is-active")
    $("#innerNav").toggleClass("lg:h-screen")
    $("#pulloutNav").toggleClass("lg:hidden lg:opacity-0 lg:opacity-1")
    $("#pulloutNav").parent().toggleClass("lg:bg-zinc-800")
}));

$(document).ready(() => $(document).on('click', '#contact-btn', function(e) {
    $("#contact-info").toggleClass("hidden")
}));

function checkDark(){
    if(!localStorage.getItem("dark")){
        localStorage.setItem("dark",true)
    }
    if(localStorage.getItem("dark")=="false"){
        $("#main").removeClass("dark");
        $("#dark-toggle").prop('checked', false);
        $("#darkbutton").text("Light Mode");
    }
    else{
        $("#main").addClass("dark");
    }
}

