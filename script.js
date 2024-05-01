let backendDisplay = false
window.onload = function(){
    const backendDisplayToggle = document.getElementsByClassName("splitter")[0];
    const backendDisplays = document.getElementsByClassName("skill_back");
    console.log(backendDisplays)

    function showBackend(show){
        if (show){
            for (let i = 0; i < backendDisplays.length; i++){
                backendDisplays[i].style.display = "inline-block"
            }
        }
        else{
            for (let i = 0; i < backendDisplays.length; i++){
                backendDisplays[i].style.display = "none"
            }
        }
    }
    
    backendDisplayToggle.onclick = function() {
        backendDisplay = !backendDisplay;
        if (backendDisplay == true){
            backendDisplayToggle.style.filter = "invert(95%) sepia(75%) saturate(0%) hue-rotate(84deg) brightness(116%) contrast(100%)";       
        }
        else{
            backendDisplayToggle.style.filter = "";   
        }
        showBackend(backendDisplay)
        
    }
}
