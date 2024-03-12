var resizer = document.querySelector(".resizer");
var middle = document.querySelector(".middle");

function initResizerFn( resizer, middle){
    var x, w;
    function rs_mousedownHandler( e ) {
        x = e.clientX;
        var sbwidth = window.getComputedStyle(middle).width;
        w = parseInt(sbwidth, 10);
        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_moveupHandler);
    }

    function rs_mousemoveHandler(e){
        var dx = e.clientX - x;
        var cw =  w + dx;
        if(cw < 700 && cw > 250)
        {
            middle.style.width = `${cw}px`;
        }
        
    }
    function rs_moveupHandler(){
        document.removeEventListener("mouseup", rs_moveupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler)
    }
    resizer.addEventListener("mousedown", rs_mousedownHandler);
}

initResizerFn( resizer, middle);