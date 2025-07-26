import styles from './Card.module.css'
import profilePic from '../assets/profile.jpg'

function Card(){
    return(
        <div className={styles.card}>
            <img src={profilePic} alt="profile picture" className={styles.profilePic}/>
            <h1 className={styles.username}>Luka</h1>
            <p className={styles.description}>I want to create a fully functional educational website by september</p>
        </div>
    );
}

export default Card