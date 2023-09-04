export function inspect(){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[]){
            console.log(`---- MÉTODO ${propertyKey} ----`);
            console.log(`---- PARÂMETROS ${JSON.stringify(args)} ----`);
            const retorno=metodoOriginal.apply(this,args);
            console.log(`---- RETORNO ${JSON.stringify(retorno)} ----`);
            return retorno;
        }
        return descriptor;
    }
}