import { useReducer } from "react";
import { AppStateEnums } from "../../../common/enums";

interface IState {
  name: string;
}
interface IActions {
  payload?: any;
  type: AppStateEnums;
}

const initialState: IState = { name: "" };

const reducer = (state: IState, actions: IActions) => {
  const { payload } = actions;
  switch (actions.type) {
    case AppStateEnums.ADD_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const useAppStateHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add all of your state here
  // you can also use useState instead of useReducer
  // useReducer would be preferrable when you have a lots of state data
  return { state, dispatch };
};

export default useAppStateHook;
