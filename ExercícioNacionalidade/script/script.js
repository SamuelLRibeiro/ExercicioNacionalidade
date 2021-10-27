function enviar() {
    var txt = document.getElementById('txt1')
    var res = document.getElementById('res')
    var pais = String(txt.value)
    if (pais == 'Brasil') {
        res.innerHTML = '<p>Você é Brasileiro!</p>'
    } else {
        res.innerHTML = '<p>Você não é brasileiro!</p>'
    }
}
