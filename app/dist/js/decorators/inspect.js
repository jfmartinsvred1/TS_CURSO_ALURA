export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---- MÉTODO ${propertyKey} ----`);
            console.log(`---- PARÂMETROS ${JSON.stringify(args)} ----`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`---- RETORNO ${JSON.stringify(retorno)} ----`);
            return retorno;
        };
        return descriptor;
    };
}
