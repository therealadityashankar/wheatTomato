const timenav = {
    elements : {
        timeNav : document.getElementById("timenav"),
        timeNavCompletion : document.getElementById("timenav-completion")
    },

    init(){
        this._percentage = 0;

        this.controlsInit()
        this.setPercentageUI()
    },

    set percentage(value){
        this._percentage = value
        this.setPercentageUI()
    },
    
    get percentage(){
        return this._percentage
    },

    setPercentageUI(){
        this.elements.timeNavCompletion.style.width = `${this.percentage*this.elements.timeNav.getBoundingClientRect().width}px`;
    },

    onWindowResize(e){
        this.setPercentageUI()
    },

    controlsInit(){
        this.elements.timeNav.addEventListener("mousemove", e => {
            if(e.buttons == 1){
                this.percentage = e.offsetX/this.elements.timeNav.getBoundingClientRect().width;
            }
        })
    }
}

export default timenav;
