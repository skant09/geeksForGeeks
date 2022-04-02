class Promise {
  constructor(f) {
    this.onResolves = [];
    this.status = "pending";

    const resolve = (value) => {
      this.status = "resolved";
      this.value = value;
      this.callOnResolves();
    };

    f(resolve);
  }

  callOnResolves() {
    if (this.status === "resolved") {
      this.onResolves.forEach((onResolve) => onResolve(this.value));
      this.onResolves.length = 0;
    }
  }

  then(onResolve) {
    console.log("then onresolve", onResolve);
    return new Promise((resolve) => {
      this.onResolves.push((value) => resolve(onResolve(value)));
      this.callOnResolves();
    });
  }
}

const prom = new Promise(function (resolve) {
  return 3;
}).then((data) => console.log(data));

console.log(prom);

module.exports = Promise;
