try {
   //executada quando não há erros
   console.log('abri um arquivo')
   console.log('manipulei e deu erro')  

   try {
    console.log(b)
   } catch (error) {
    console.log('deu erro')
   }
   finally{
    console.log('também sou finally')
   }
} catch (error) {
    //quando dá erro
    let a = 0;
    console.log(a)
} finally{
    //sempre executa
    console.log('fechei')
}