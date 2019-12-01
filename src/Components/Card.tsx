import { Divider, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { State } from "../State";
import { CardBody, CardContent } from "./Styled/CardBody";
import styled from "./Styled/Theme";

const DeleteButton = styled(IconButton)`
    position: absolute;
    top: ${p => p.theme.spacing(1)}px;
    right: ${p => p.theme.spacing(1)}px;
`;

const RelativeCardContent = styled(CardContent)`
    position: relative;
`;

const StatsAbsolute = styled.div`
    position: absolute;
    bottom: ${p => p.theme.spacing(2)}px;
    right: ${p => p.theme.spacing(2)}px;
`;

type Props = {
    index: number;
};

export const CardComponent = ({ index }: Props) => {
    const [state, dispatch] = React.useContext(State);
    const card = state.board[index];
    return (
        <CardBody>
            <RelativeCardContent>
                <Typography variant="h4" gutterBottom>
                    {card.name}
                </Typography>
                <Typography gutterBottom>{card.cardText}</Typography>
                {card.flavorText && (
                    <>
                        <Divider />
                        <Typography variant="caption" component="span">{card.flavorText}</Typography>
                    </>
                )}
                {card.stats && (
                    <StatsAbsolute>
                        <Typography variant="h6" component="span">
                            {card.stats[0]}/{card.stats[1]}
                        </Typography>
                    </StatsAbsolute>
                )}
                <DeleteButton onClick={() => dispatch({ type: "DestroyCard", index })}>
                    <DeleteIcon fontSize="small" />
                </DeleteButton>
            </RelativeCardContent>
        </CardBody>
    );
};
