# promiseq

```
const PromiseQ = require('promiseq');

function getData(i) {
    return new Promise(resolve => {
        console.log("starting:", i);
        setTimeout(() => {
            try {
                if (i === 8) {
                    throw "BOOM";
                }
                resolve([i, new Date()]);
            } catch (ex) {
                resolve(ex);
            }
        }, 1000);
    });
}

const q = new PromiseQ([
    getData.bind(null, 1),
    getData.bind(null, 2),
    getData.bind(null, 3),
    getData.bind(null, 4),
    getData.bind(null, 5),
    getData.bind(null, 6),
    getData.bind(null, 7),
    getData.bind(null, 8),
    getData.bind(null, 9),
    getData.bind(null, 10),
]);

q.run()
    .then(data => {
        console.log("The data", data);
    })
    .catch(ex => {
        console.log(ex);
    });
```
