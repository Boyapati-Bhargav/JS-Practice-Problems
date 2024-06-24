/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // let p1;
    // let p2;
    // await promise1.then((res) => {p1 = res.data});
    // await promise2.then((res) => {p2 = res.data});
    // return new Promise((resolve) => resolve(p1+p2))

    return Promise.all([promise1,promise2]).then((values) => values.reduce((acc,val) => acc+val,0))

        // return Promise.all([promise1,promise2]).then(([value1,value2]) => value1 + value2)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */