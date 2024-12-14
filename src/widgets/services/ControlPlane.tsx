import styles from './ControlPlane.module.css';

import Card from "../../components/card/Card";
import VelezIcon from "@/assets/icons/velez/VelezIcon";

import MatreshkaIcon from "@/assets/icons/matreshka/MatreshkaIcon";

export default function ControlPageWidget() {
    const components = [
        {
            tittle: 'Matreshka',
            icon: <MatreshkaIcon/>,
            externalLink: ""
        },
        {
            tittle: 'Velez',
            icon: <VelezIcon/>,
            externalLink: ""
        },
    ]

    return (
        <div className={styles.ControlPlane}>
            {
                components
                    .map((v) =>
                        <div className={styles.ServiceCard}>
                            <Card {...v}/>
                        </div>)
            }
        </div>
    )
}
