import { Grid, Paper } from "@material-ui/core";
import styled from "./Theme";

export const CardBody = styled(Paper)`
    width: 244px;
    height: 340px;
`;

export const CardContent = styled(Grid)`
    height: 100%;
    padding: ${p => p.theme.spacing(2)}px;
`;
