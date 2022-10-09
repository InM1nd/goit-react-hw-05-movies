import styles from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';


export default function Navigation () {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={styles.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};


