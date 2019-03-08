function getUsuarioSync(id){
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000){
        //Esperando
        //Haciendo el fetch de BD
    } 
    return {
        id,
        nombre: `Usuario${id}`
    }
}

function getUsuario(id, callback){
    //Esperando
    //Haciendo el fetch de BD
    setTimeout(() => {
        callback({
            id,
            nombre: `Usuario${id}`
        });
    }, 3000);
}

module.exports = {getUsuarioSync, getUsuario}
