class PromiseQ {
    constructor(promises) {
        this.promises = promises;
        this.results = [];
        this.done = null;
        this.P = new Promise(resolve => {
            this.done = resolve;
        });
    }

    add(promise) {
        this.promises.append(promise);
    }

    run() {
        const results = this.results;
        this.promises.forEach((p, i) => {
            this.P = this.P
                .then(p)
                .then(data => { 
                    results.push(data);
                    return results;
                });

            if (i === this.promises.length - 1) {
                this.done();
            }
        });
        return this.P;
    }
}

module.exports = PromiseQ;
