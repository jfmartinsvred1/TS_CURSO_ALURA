export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            if (unidade === 'segundos') {
                console.log(`${propertyKey},tempo de execucao: ${((t2 - t1) / divisor).toFixed(5)} ${unidade}`);
                return retorno;
            }
            console.log(`${propertyKey},tempo de execucao: ${((t2 - t1) / divisor).toFixed(1)} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
