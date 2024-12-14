import styles from './home.module.css';

import {useState} from "react";
import ControlPageWidget from "@/widgets/services/ControlPlane";

export default function HomePage() {
    const [openedWidget, setOpenedWidget] = useState<React.JSX.Element>(<ControlPageWidget/>)

    return (
        <div className={styles.Home}>
            <div className={styles.HomeHeader}>
                <div className={styles.Tab}>
                    Home
                </div>
                <div className={styles.Tab}>
                    <div className={styles.TabName}>Matreshka</div>
                    <div className={styles.CloseButton}>
                    <span className="material-symbols-outlined" children={"close"}/>
                    </div>
                </div>
            </div>
            <div className={styles.OpenedWidget}>
                {openedWidget}
            </div>
        </div>
    )
}
