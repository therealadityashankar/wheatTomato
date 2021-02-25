import * as display from "./display/index.mjs";
import * as codearea from "./codearea.mjs";

const wheatTomato = {
    codemirror : CodeMirror.fromTextArea(document.getElementById("code-area"), {
        lineNumbers : true,
        mode : "javascript"
    }),
    elements : {
        canvas : document.getElementById("display-area"),
        displayAreaContainer : document.getElementById("display-area-container"),
        codeAreaContainer : document.getElementById("code-area-container"),
        videoControls : document.getElementById("video-controls"),
        canvasControl : document.getElementById("canvas-controls")
    }
}

async function main(){
    await codearea.init(wheatTomato)
    await display.init(wheatTomato)
}

main()
window.main = main
