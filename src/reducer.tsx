export interface State {
  number: string;
  confirmed: boolean;
  selectedNumber: number;
  gameStarted: boolean;
  finalNumber: number;
}
export type Action =
  | {type: 'reset'}
  | {type: 'clean'}
  | {type: 'confirm'; payload: number}
  | {type: 'start'}
  | {type: 'handleChange'; payload: string};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'reset':
      return {
        ...state,
        number: '0',
        confirmed: false,
        selectedNumber: 0,
        gameStarted: false,
        finalNumber: 0,
      };
    case 'clean':
      return {
        ...state,
        number: '',
      };
    case 'confirm':
      return {
        ...state,
        confirmed: true,
        selectedNumber: action.payload,
      };
    case 'start':
      return {
        ...state,
        gameStarted: true,
        finalNumber: Math.floor(Math.random() * 10),
      };
    case 'handleChange':
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
