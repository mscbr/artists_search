interface IBaseObject {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  [index: string]: any;
}

export const makeActionCreator = (type: string, ...argNames: string[]) => {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  return function (...args: any) {
    const action: { type: string; payload: IBaseObject } = {
      type,
      payload: {}
    };
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };
};

export const prepareActions = (pairs: Array<Array<string>>) => {
  let res: IBaseObject = {};
  for (let action of pairs) {
    // @ts-ignore
    res[action[0]] = makeActionCreator(...action);
  }
  return res;
};

export const createReducer = <S>(initialState: S, handlers: IBaseObject) => {
  return (
    state = initialState,
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    action: { type: string; payload?: any }
  ) => {
    /* eslint-disable-next-line  no-prototype-builtins */
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};
