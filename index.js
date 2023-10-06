function myfunction(){
        var x = document.getElementById("menu");
        if (x.className === "headernavlist") {
            x.className += " responsive";
        } else {
            x.className = "headernavlist";
        }
    }