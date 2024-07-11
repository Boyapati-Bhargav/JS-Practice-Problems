/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a =0;
    let b =1;
    let c;
    
    while(true){
        yield a
        c = a+b
        a = b
        b = c
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */