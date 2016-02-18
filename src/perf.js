export const memoize = function (fn) {
  const cache = {};
  return function () {
    const args = Array.prototype.slice.call(arguments);
    const hash = args.map((arg) => {
      return (typeof arg === "string" || typeof arg === "number") ? arg : JSON.stringify(arg);
    }).join("~");
    return hash in cache ?
      cache[hash] :
      cache[hash] = fn.apply(this, args); // eslint-disable-line no-invalid-this
  };
};
