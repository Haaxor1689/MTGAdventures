import { Container, Grid } from "@material-ui/core";
import React from "react";
import { initialState, State } from "../State";
import { Reducer } from "../State/Reducer";
import { CardComponent } from "./Card";
import { PileComponent } from "./Pile";

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(Reducer, initialState);
    return (
        <State.Provider value={[state, dispatch]}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item>
                        <PileComponent />
                    </Grid>
                    {state.board.map((c, i) => <Grid key={i} item><CardComponent index={i} /></Grid>)}
                </Grid>
            </Container>
        </State.Provider>
    );
};

export default App;
