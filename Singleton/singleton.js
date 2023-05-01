class Singleton {
  static getInstance() {
    // Singleton.instance instanceof Singleton
    if (!Singleton.instance) {
      Singleton.instance = {
        name: "Omar",
        Email: "test@test.com",
        Rank: Math.floor(Math.random() * 10),
      };
    }
    return Singleton.instance;
  }
}
// Usage:
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);


// Singleton.instance instanceof Singleton