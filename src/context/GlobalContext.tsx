import { createContext, useReducer } from "react";

class Expense {
  public id: number;

  constructor(public amount: number, public text?: string) {
    this.id = Math.floor(Math.random() * 1_000_000);
  }
}

const list: Expense[] = [new Expense(200), new Expense(-140, "on car")];

type ContextArg = {
  state: Expense[];
  dispatch: React.Dispatch<ActionArg>;
};

const Context = createContext<ContextArg>({} as ContextArg);

type ProviderProps = {
  children: React.ReactNode;
};

type ActionArg = {
  type: "add" | "remove";
  payload?: string;
};

const initState: Expense[] = list; //[]

const reducer = (state: Expense[], action: ActionArg) => {
  switch (action.type) {
    case "add":
      return [...state, new Expense(200, "acr")];
    case "remove":
      return [...state];
    default:
      return state;
  }
};

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
