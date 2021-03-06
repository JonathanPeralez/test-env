import React from 'react';
import Paper from 'material-ui/Paper';
import {white, blueGrey600} from 'material-ui/styles/colors';
import {ResponsiveContainer} from 'recharts';
import GlobalStyles from '../../styles';

// This is a presentational component where we can put the query results
const ExtraSpace = (props) => {
  const styles = {
    paper: {
      backgroundColor: white,
      height: 150
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: white,
      backgroundColor: blueGrey600,
      padding: 10
    }
  };
  return (
    <Paper style={styles.paper}>
      <div style={{...GlobalStyles.title, ...styles.header}}> Query Response </div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <h1>{props.queryResponse}</h1> 
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default ExtraSpace;
