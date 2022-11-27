window.onload = pageLoad;

function pageLoad(){
    closeButton();
}

function closeButton(){
    closebtn = document.getElementById("closebtn");
	closebtn.onclick = function(){
        wholepage = document.getElementById("main-container");
        wholepage.style.display = "none";

    }
}