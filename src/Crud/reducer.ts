type Transaction = {
  id: number;
  title: string;
  desc: string;
  amount: number;
};

type Action =
  | {
      type: "adicionar";
      payload: { title: string; desc: string; amount: number };
    }
  | { type: "remover"; payload: number }
  | { type: "limpar" }
  | { type: "editar"; payload: Transaction };

const transactionReducer = (state: Transaction[], action: Action) => {
  switch (action.type) {
    case "adicionar":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          desc: action.payload.desc,
          amount: action.payload.amount,
        },
      ];
    case "remover":
      return state.filter((tr) => tr.id !== action.payload);
    case "limpar":
      return [];
    case "editar":
      return state.map((tr) =>
        tr.id === action.payload.id
          ? {
              ...tr,
              id: action.payload.id,
              title: action.payload.title,
              desc: action.payload.desc,
              amount: action.payload.amount,
            }
          : tr
      );
    default:
      return state;
  }
};

export default transactionReducer;
