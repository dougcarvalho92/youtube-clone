import { Box, Grid, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DrawerMenu from "../../components/DrawerMenu";
import ToolbarTop from "../../components/Toolbar";
import videos from "../../data.json";
import useStyles from "./styles";

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className={classes.root}>
      <ToolbarTop
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        open={open}
        handleChange={() => handleChange()}
      />
      <Box display="flex">
        <DrawerMenu open={open} handleChange={() => handleChange()} />
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
