wt.fodder.parameters = {
    width : 1092, // px
    height : 500, //px
    length : {
       minutes : 1,
       seconds : 25
    }
}

wt.fodder.animation = async ({ctx, tools, time, params}) => {
    const textOptions = {
      position : {
        width : params.width/2,
        height : params.height/2
      }
    }
    
    if (time.before`1min 35sec`){
        tools.drawText("Let's draw with code !", textOptions)
    } else {
        tools.drawText("Modify this example for fun !", textOptions)
    }
}
