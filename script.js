$(document).ready(function () {

    $('#blt').click(function (e) {
        e.preventDefault()
        let add = $('#tarefa').val()
        $('ol').append('<li>' + add + '</li>')
        
    });
});

$('#tarefa').keyup(function (e) {
    if (e.keyCode == 13) {
        $('#blt').click()
    }
})

$(document).on('dblclick', 'li', function () {
    $(this).toggleClass('risco').fadeOut('slow');
});

$('#tarefa').focus(function () {
    $(this).val('')
})

$('ol').sortable()