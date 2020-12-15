const BACK_PATH = 'backPath';

class BackPathHandler {
  static setPath = (path: string) => {
    sessionStorage.setItem(BACK_PATH, path);
  };

  static hasPath = () => !!sessionStorage.getItem(BACK_PATH);

  static getPath = () => {
    const path = sessionStorage.getItem(BACK_PATH);
    if ((path?.indexOf(',') || -1) < 0) return path;
    return path?.slice(0, path.indexOf(','));
  };

  static pushPath = (path: string) => {
    const item = sessionStorage.getItem(BACK_PATH);
    sessionStorage.setItem(BACK_PATH, item ? `${path},${item}` : path);
  };

  static clearPath = () => {
    const path = sessionStorage.getItem(BACK_PATH);
    if (path && path.indexOf(',') > -1) {
      sessionStorage.setItem(
        BACK_PATH,
        path?.slice(path.indexOf(',') + 1, path.length)
      );
      return;
    }
    sessionStorage.removeItem(BACK_PATH);
  };

  static resetPath = () => {
    sessionStorage.removeItem(BACK_PATH);
  };
}

export default BackPathHandler;
