export default class GameSavingLoader {
  static load(value) {
    const data = value;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}
