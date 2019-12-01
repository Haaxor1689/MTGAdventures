import React from "react";
import { Card } from "../Models/Cards";
import { Action } from "./Actions";
import DeepReadonly from "../Utility/DeepReadonly";

export type AppState = DeepReadonly<{
    pile: string[];
    board: Card[];
}>;

export const initialState: AppState = {
    pile: [],
    board: [],
};

export const State = React.createContext<[AppState, React.Dispatch<Action>]>([initialState, undefined as any]);
