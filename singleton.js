class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = {};
    }
    return Singleton.instance;
  }
}
// Usage:
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);

// Singleton.instance instanceof Singleton