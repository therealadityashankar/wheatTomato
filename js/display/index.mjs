import timenav from "./timenav.mjs";

async function init(wheatTomato){
    setOnWindowResize(wheatTomato)
    timenav.init()
}

async function setOnWindowResize(wheatTomato){
    function resize(e){
        setSize(wheatTomato)
        timenav.onWindowResize(wheatTomato)
    }

    window.addEventListener("resize", resize)
    resize()
}

function setSize(wheatTomato){
    const el = wheatTomato.elements
    const boundingarea = el.videoControls.getBoundingClientRect();
    let width = boundingarea.width - 20;
    let height = width*(9/16)

    if (height > boundingarea.height - 130){
        height = boundingarea.height - 130;
        width = height*(16/9)
    }

    el.displayAreaContainer.width = width;
    el.canvas.width = width;
    el.canvas.height = height;
}


export {init};
