$('document').ready( function() {
    $('button').on('click', function() {
        const name1 = $('#name1').val()
        const name2 = $('#name2').val()
        const adverb = $('#adverb').val()
        const adjective = $('#adjective').val()
        let textToAdd = "<p id='finalText'>It was pizza day at school, and <strong>" + name1 + "</strong> and <strong>" + name2 + "</strong> were super excited for lunch. But when they went outside to eat, a bird stole their pizza! <strong>" + name1 + "</strong> chased the bird all over school. <strong>"  + name2 + "</strong> climbed, jumped, and ran <strong>" + adverb + "</strong> through the playground. Then <strong>" + name1 + "</strong> and <strong>" + name2 + "</strong> tripped and the bird escaped! Luckily, Their friends were <strong>" + adjective + "</strong> to share their pizza with them.</p>"
        $('#readyText').append(textToAdd)
        console.log($('#finalText'))
        $('#finalText').slideDown(300, function(){
            $(this).parent().css({"border-color": "lightgray", 
            "border-width":"3px", 
            "border-style":"solid"})
        })
    })
})