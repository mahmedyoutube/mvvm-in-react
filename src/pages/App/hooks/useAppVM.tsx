import React, { useCallback, useEffect } from "react";
import { IAppProps } from "..";
import { AppStateEnums } from "../../../common/enums";
import useAppStateHook from "./useAppStateHook";

const useAppVM = (props: IAppProps) => {
  const { state, dispatch } = useAppStateHook();

  const addName = (payload: string) => {
    dispatch({ type: AppStateEnums.ADD_NAME, payload });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    addName(value);
  };

  const loadData = useCallback(async () => {
    // your api calls
    // after retrieving your data from api's
    // then call dispatch in order to delegate all of your data to AppStateHook
  }, []);

  useEffect(() => {
    // your useEffect logics
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // return all of your state inner data + state also and all of the necessary functions which are required by the views

  return { onChangeHandler, ...state, state, dispatch };
};

export default useAppVM;
