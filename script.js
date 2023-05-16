$(document).ready(function () {

    $('#blt').click(function (e) {
        e.preventDefault()
        let add = $('#tarefa').val()
        let listaDeTarefas = []
        $('ol').append('<li style="font-style: italic;">' + add + '</li>')

        if (add.trim() !== '') {
            listaDeTarefas.push(add);
            $('#tarefa').val('');
        }
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

$(document).on('click', 'li', function () {
    $(this).toggleClass('risco')
})



$('#tarefa').focus(function () {
    $(this).val('')
    $('ol').sortable();
})

