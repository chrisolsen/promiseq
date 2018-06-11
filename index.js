module.exports = class {
    constructor(fns) {
        this.fns = fns;
        this.results = [];
        this.done = null;
        this.P = new Promise(resolve => {
            this.done = resolve;
        });
    }

    add(fn) {
        this.fns.push(fn);
    }

    run() {
        const results = this.results;
        this.fns.forEach((fn, i) => {
            this.P = this.P
                .then(fn)
                .then(data => { 
                    results.push(data);
                    return results;
                });

            if (i === this.fns.length - 1) {
                this.done();
            }
        });
        return this.P;
    }
};
