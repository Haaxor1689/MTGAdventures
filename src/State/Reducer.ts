import { AppState } from ".";
import { Action } from "./Actions";
import { Cards } from "../Models/Cards";
import { ShufflePile } from "../Utility/Shuffler";

export const Reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "Restart":
            return {
                pile: ShufflePile(["1", "2", "2", "3", "3", "3", "4", "4", "4", "4"]),
                board: [],
            };
        case "Shuffle":
            return {
                ...state,
                pile: ShufflePile(state.pile),
            };
        case "Draw": {
            const [drawn, ...pile] = state.pile;
            return {
                pile,
                board: [Cards[drawn], ...state.board],
            };
        }
        case "DestroyCard": {
            const board = [...state.board];
            board.splice(action.index, 1);
            return {
                ...state,
                board,
            };
        }
    }
};
