import { NavLink, Outlet } from 'react-router-dom';
import styles from "./App.module.css";


 export const Layout = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.head}>
                <NavLink className={styles.text} to="/home">Home </NavLink>
                <NavLink className={styles.text} to="/clicktimer">1examp </NavLink>
                <NavLink className={styles.text} to="/previnput">2examp </NavLink>
                <NavLink className={styles.text} to="/focustracker">3examp </NavLink>
                <NavLink className={styles.text} to="/123">4examp </NavLink>
                <NavLink className={styles.text} to="/">Tasks </NavLink>
            </div>

            <div className={styles.body}>
                <Outlet />
            </div>
            <footer className={styles.foot}> @2025 homework 5</footer> 

        </div>
    )
}