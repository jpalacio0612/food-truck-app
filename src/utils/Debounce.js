export class Debounce {
  constructor(callback, delay, immediate = false) {
    this.timerID = null;
    this.callback = callback;
    this.delay = delay;
    this.immediate = immediate;
  }

  addCallback(callback) {
    this.callback = callback;
  }

  addDelay(delay) {
    this.delay = delay;
  }

  execute(...args) {
    clearTimeout(this.timerID);

    let instantCall = this.timerID == null && this.immediate;

    if (instantCall) {
      this.callback.apply(this, args);
    }

    this.timerID = setTimeout(() => {
      if (!this.immediate) {
        this.callback.apply(this, args);
      }

      this.timerID = null;
    }, this.delay);
  }

  reset() {
    clearTimeout(this.timerID);
    this.timerID = null;
  }
}
