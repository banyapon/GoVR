//import React from "react";
import React, { useEffect, useState } from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import firebase from 'config/firebase';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Paper from '@material-ui/core/Paper';
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionLatest() {
  const classes = useStyles();
  const ref = firebase.firestore().collection('documents').doc();
    const [collections, setBlogs] = useState([]);
    useEffect(() => {
        firebase.firestore()
        .collection('documents')
        .onSnapshot(snap => {
          const collections = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBlogs(collections);
        });
    }, []);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Recommended</h2>
        </div>
        <GridContainer spacing={3}>
        {collections.map(document =>
        <GridItem xs={12} sm={6} md={3}>
          <Paper className={classes.paper} onClick={() => setClassicModal(true)}>
          <img
                src={document.thumbnail}
                alt={document.author}
                className={classes.imgFluid}
              />
            {document.title}
          </Paper>
        </GridItem>
        )}
      </GridContainer>
        <div className={classes.title}>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
