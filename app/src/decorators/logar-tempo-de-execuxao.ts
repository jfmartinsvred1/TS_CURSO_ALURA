export function logarTempoDeExecucao(emSegundos:boolean=false){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:Array<any>){
            let divisor=1;
            let unidade='milisegundos';
            if(emSegundos){
                divisor=1000;
                unidade='segundos';
            }
            const t1 =performance.now();
            const retorno = metodoOriginal.apply(this,args);
            const t2 =performance.now();
            if(unidade==='segundos'){
                console.log(`${propertyKey},tempo de execucao: ${((t2-t1)/divisor).toFixed(5)} ${unidade}`)
                return retorno
            }
            console.log(`${propertyKey},tempo de execucao: ${((t2-t1)/divisor).toFixed(1)} ${unidade}`)
            return retorno
        }
        return descriptor;
    }
}