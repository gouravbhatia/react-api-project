import React from 'react';
import { Card, CardContent,Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import styles from './DetailsBox.module.css';


const DetailsBox = ({ dishes, showAlert }) => {


  let dishname = dishes.map((dishname) => dishname.item_name);
  let catname = dishes.map((catname) => catname.category_name);
  let isveg = dishes.map((isveg) => isveg.is_veg);
  let price = dishes.map((price) => price.price);
  let ID = dishes.map((ID) => ID.item_id);
  let des = dishes.map((des) => des.description);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" className={styles.box2}>
      {ID.map((Idn, i) => (<Grid item component={Card} xs={12} md={3} className={cx(styles.test1, styles.test2)}>
        <CardContent>
            <Typography color="textSecondary">Name:{dishname[i]}</Typography>
            <Typography color="textSecondary">Category: {catname[i]}</Typography>
            <Typography color="textSecondary">Is_Veg: {isveg[i]}</Typography>
            <Typography color="textSecondary">Price: {price[i]}</Typography>
            <hr />
            <Button variant="outlined" color="dark" size="small" defaultValue="" key={ID} onClick={() => showAlert(des[i])}>Click For Description</Button>
        </CardContent>
      </Grid>))}
      </Grid>
    </div>
    )
}

export default DetailsBox;
