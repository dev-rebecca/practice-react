import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import hatsImage from '../../assets/hats-image.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Amazing Hats</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={hatsImage} alt='Some amazing hats!' />
      </div>
    </Fragment>
  );
};

export default Header;
