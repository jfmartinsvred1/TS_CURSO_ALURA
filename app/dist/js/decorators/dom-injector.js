export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
