import useAppVM from "./hooks/useAppVM";

export interface IAppProps {}

const App = (props: IAppProps) => {
  const { onChangeHandler, name } = useAppVM(props);
  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={onChangeHandler}
        placeholder="Enter your name here"
      />
      <h3 style={{ marginTop: 10 }}>state is : {name}</h3>
    </div>
  );
};

export default App;
