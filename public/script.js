$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(document).ready(function() {
    // Seleciona o range e o elemento onde o valor será exibido
    $('#moneyRange').on('input', function() {
        // Obtém o valor atual do range
        var currentValue = $(this).val();
        // Atualiza o elemento que exibirá o valor dinâmico
        $('#rangeValue').text('R$' + currentValue);
    });
});
