
function contar() {

    var start = window.document.getElementById('start')
    var end = window.document.getElementById('end')
    var pass = window.document.getElementById('pass')
    var output = window.document.querySelector('div#output')
    output.innerHTML = 'contando: <br>'
    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        alert('falta dados.')

    }
    else {
        let pas = Number(pass.value)
        let star = Number(start.value)
        let en = Number(end.value)
        if (pas <= 0) {
            alert('impossivel contar. considerando passo 1')
            pas = 1
        }
        if (star > en) {
            for (let count = star; count >= en; count -= pas) {
                output.innerHTML += `${count}, `
                console.log(count)
            }
        } else {
            for (let count = star; count <= en; count += pas) {
                output.innerHTML += `${count}, `
                console.log(count)
            }
        }

    }
}

