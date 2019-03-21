import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Avatar
} from "@material-ui/core";
import StyledButton from "../common/StyleButton";

const SuburbResult = ({ suburb }) => {
  return (
    <div className="col s12 m12">
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={{ backgroundColor: "red" }}>
              {suburb.city.charAt(0)}
            </Avatar>
          }
          title={suburb.city}
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            {suburb.name}
          </Typography>
          <Typography component="p">{suburb.description}</Typography>
        </CardContent>
        <CardActions>
          {/* <Button variant="contained" color="primary" size="small">
            Learn More
          </Button> */}
          <StyledButton>Learn More</StyledButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default SuburbResult;