function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        console.log('não é')
        throw new Error('Esperando instancia de date')
    }

    else if (!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-br' ,{
        hour12: false
    })

}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora)
} catch (error) {

} finally{
    console.log(`Tenha um bom dia!!`)
}
