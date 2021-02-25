export async function init(wheatTomato){
    setCodeMirrorSize(wheatTomato)
    await getInitUserCode(wheatTomato)
}

function setCodeMirrorSize(wheatTomato){
    wheatTomato.codemirror.setSize(null, "100%");
}

async function getInitUserCode(wheatTomato){
    const code = await (await fetch("/js/initScript.mjs")).text()
    wheatTomato.codemirror.setValue(code);
}
