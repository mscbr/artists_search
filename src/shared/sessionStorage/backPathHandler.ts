const BACK_PATH = 'backPath';

class BackPathHandler {
  static setPath = (path: string) => {
    sessionStorage.setItem(BACK_PATH, path);
  };

  static hasPath = () => !!sessionStorage.getItem(BACK_PATH);

  static getPath = () => sessionStorage.getItem(BACK_PATH);

  static clearPath = () => {
    sessionStorage.removeItem(BACK_PATH);
  };
}

export default BackPathHandler;
