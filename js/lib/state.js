/**
 * State
 * @param {object} data
 * @param {() => void} render
 */
export function useState(data, render = () => {}) {
  return new Proxy(data, {
    set: (target, key, value) => {
      if (target[key] === value) return true;
      target[key] = value;
      requestAnimationFrame(() => {
        render();
      });
      return true;
    },
  });
}
