import styles from "../static/style.css";
import bluechest from "../images/bluechest.png";
export default function HomePage() {
    return (
        <div>
            <img styles={styles.img} id='bluechest' src={bluechest}/>
        </div>
       
    );
}
