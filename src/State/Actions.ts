type RestartAction = {
    type: "Restart";
}

type ShuffleAction = {
    type: "Shuffle";
}

type DrawAction = {
    type: "Draw";
}

type DestroyCardAction = {
    type: "DestroyCard";
    index: number;
}

export type Action = RestartAction | ShuffleAction | DrawAction | DestroyCardAction;