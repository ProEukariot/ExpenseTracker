import { createContext, useReducer } from "react";

class Expense {
  public id: number;

  constructor(public amount: number, public text: string) {
    this.id = Math.floor(Math.random() * 1_000_000);
  }
}

const list: Expense[] = [
  new Expense(200, "ewqeqw"),
  new Expense(-140, "on car"),
];

type ExpenseMutator = {
  state: Expense[];
  dispatch: React.Dispatch<ActionArg>;
};

const Context = createContext<ExpenseMutator>({} as ExpenseMutator);

type ProviderProps = {
  children: React.ReactNode;
};

// type ActionArg = {
//   type: "add" | "remove" | "set";
//   payload: Expense | Expense[];
// };

type ActionArg =
  | {
      type: "add";
      payload: Expense;
    }
  | { type: "set"; payload: Expense[] }
  | { type: "remove"; payload: number };

const initState: Expense[] = [];

const reducer = (state: Expense[], action: ActionArg) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((expense) => expense.id !== action.payload);
    case "set":
      return action.payload;
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

export { Context, Provider, Expense };
