import { IconButton, Tooltip } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ReplayIcon from "@material-ui/icons/Replay";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import React from "react";
import { State } from "../State";
import { CardBody, CardContent } from "./Styled/CardBody";

export const PileComponent = () => {
    const [state, dispatch] = React.useContext(State);
    return (
        <CardBody>
            <CardContent container direction="column" justify="space-evenly" alignItems="center">
                <Tooltip title={state.pile.length <= 0 ? "No cards to draw" : "Draw card"}>
                    <span>
                        <IconButton color="primary" onClick={() => dispatch({ type: "Draw" })} disabled={state.pile.length <= 0} aria-label="draw">
                            <AddBoxIcon fontSize="large" />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Shuffle deck">
                    <IconButton onClick={() => dispatch({ type: "Shuffle" })} aria-label="shuffle">
                        <ShuffleIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Restart deck">
                    <IconButton color="secondary" onClick={() => dispatch({ type: "Restart" })} aria-label="restart">
                        <ReplayIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </CardContent>
        </CardBody>
    );
};
