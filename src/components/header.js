import React from 'react'
import { Link } from 'gatsby'
import styles from './header-css-module.module.css'

import mikeicon from '../../static/etc/images/mike-icon.png';

export default () => (
  <div className={styles.headercontainer}>
    <ul>
    <li className={styles.headerListItem}><Link to="/" className={styles.headerLink}><img src={mikeicon} alt="not loaded"/></Link></li>
      <li className={styles.headerListItem}><Link to="/projects/flex-mate" className={styles.headerLink} activeClassName={styles.activeLink}>Contact</Link></li>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink} activeClassName={styles.activeLink}>Blog</Link></li>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink} activeClassName={styles.activeLink}>About</Link></li>
    </ul>
  </div>

)