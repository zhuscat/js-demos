function MyPromise(executor) {
  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(function () {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = value;
        for (var i = 0; i < self.onResolvedCallbacks.length; i++) {
          self.onResolvedCallbacks[i](value);
        }
      }
    }, 0);
  }

  function reject(reason) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(function () {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = reason;
        for (var i = 0; i < self.onRejectedCallbacks.length; i++) {
          self.onRejectedCallbacks[i](reason);
        }
      }
    }, 0);
  }

  var self = this;
  self.status = 'pending';
  self.data = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

function resolvePromise(promise, x, resolve, reject) {
  var thenOrThrowCalled = false;
  if (promise === x) {
    reject(new TypeError('`promise` and `x` refer to the same object'));
  }
  // i'm not sure if this is right...
  if (x instanceof MyPromise) {
    if (x.status === 'pending') {
      // if `x` is pending, `promise` must remian pending util `x` is fulfilled or rejected
      // 假设过了一段时间之后， x resolve 了，是 resolve(promise) 会发生什么
      x.then(resolve, reject);
    } else if (x.status === 'resolved') {
      // if/when `x` is fulfilled, fulfill `promise` with the same value
      resolve(x.data);
    } else if (x.status === 'rejected') {
      // if/when `x` is rejected, reject promise with the same reason
      reject(x.data);
    }
    return;
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      var then = x.then;
      if (typeof then === 'function') {
        then.call(x, function (y) {
          if (!thenOrThrowCalled) {
            thenOrThrowCalled = true;
            resolvePromise(promise, y, resolve, reject);
          }
        }, function (r) {
          if (!thenOrThrowCalled) {
            thenOrThrowCalled = true;
            reject(r);
          }
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (!thenOrThrowCalled) {
        thenOrThrowCalled = true;
        reject(e);
      }
    }
  } else {
    resolve(x);
  }
}

// then 需要返回一个全新的 promise2
// promise2 !== promise
MyPromise.prototype.then = function then(onFulfilled, onRejected) {
  var promise2;
  var self = this;
  onFulfilled = onFulfilled ? onFulfilled : function (value) {};
  onRejected = onRejected ? onRejected : function (reason) {};
  if (self.status === 'resolved') {
    return promise2 = new MyPromise(function (resolve, reject) {
      // 这里需要异步吗
      // 这里需要异步执行
      // 根据规范
      /*
      In practice, this requirement ensures that onFulfilled and onRejected execute asynchronously, 
      after the event loop turn in which then is called, and with a fresh stack. 
      */
      setTimeout(function() {
        try {
          var x = onFulfilled(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  if (self.status === 'rejected') {
    return promise2 = new MyPromise(function (resolve, reject) {
      // 这里需要异步吗
      setTimeout(function () {
        try {
          var x = onRejected(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  if (self.status === 'pending') {
    return promise2 = new MyPromise(function (resolve, reject) {
      self.onResolvedCallbacks.push(function (value) {
        try {
          var x = onFulfilled(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });

      self.onRejectedCallbacks.push(function (reason) {
        try {
          var x = onRejected(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

MyPromise.deferred = MyPromise.defer = function () {
  var dfd = {};
  dfd.promise = new Promise(function (resolve, reject) {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

try {
  module.exports = MyPromise;
} catch (e) {}

new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        resolve('MyPromise1 [[MyPromise2 -->> 1');
      });
    }));
  }, 100);
}).then(function (value) {
  console.log(value);
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new MyPromise(function (resolve, reject) {
        setTimeout(function () {
          resolve('MyPromise1 -->> then [[MyPromise -->> 1');
        }, 100);
      }));
    }, 500);
  });
}).then(function (value) {
  console.log(value);
});


// 原生 Promise 行为测试
// var p = new Promise(function (resolve, reject) {
//   console.log(0);
//   resolve(1);
// })

// p.then(function (value) {
//   console.log(value);
// });

// p.then(function (value) {
//   console.log(value);
// })

// console.log(3);
