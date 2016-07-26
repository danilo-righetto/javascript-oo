/* try {
    Usando o bloco!
    
} catch (error) {
    Tratando exceções!
}*/

// Criando a nossa propria exceção
function notDefined(message) {
    this.message = message || 'Função não definida';

    Error.call(this, message);
    // Essa é uma exceção customizada.
}

notDefined.prototype = new Error();


try {
    hello();
} catch (e) {
    throw new notDefined();
} finally {
    console.log("Finally block");
    // sempre será executado o Finally
}