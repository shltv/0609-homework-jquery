$('document').ready( function() {
    $('button').on('click', function() {
        const width = parseInt($('#width').val())
        const height = parseInt($('#height').val())
        const colorNumber = parseInt($('#colorNumber').val())

        let fileSize = width * height / colorNumber / 1000

        let textToAdd = "<p id='finalText'>File is " + fileSize + " KB."
        if (fileSize < 10){
            textToAdd += " Which is <span style='color:green;font-weight:bold'>ok</span>."
        } else{
            textToAdd += " Which is <span style='color:red;font-weight:bold'>not ok</span>."
        }
        $('#readyText').append(textToAdd)
        console.log($('#finalText'))
        $('#finalText').slideDown(300, function(){
            $(this).parent().css({"border-color": "lightgray", 
            "border-width":"3px", 
            "border-style":"solid"})
        })
    })
})