function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('fotoshorarios')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#6D9EED'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#D4643B'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#312E7D'
    }
} 
