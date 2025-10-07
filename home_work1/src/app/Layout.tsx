import { NavLink, Outlet } from 'react-router-dom';
import styles from "./App.module.css";


 export const Layout = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.head}>
                <NavLink to="/home">Home </NavLink>
                <NavLink to="/">Tasks</NavLink>
            </div>

            <div className={styles.body}>
                <Outlet />
            </div>
            <footer className={styles.foot}> @2025 homework 3</footer> 

        </div>
    )
}