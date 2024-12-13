import styles from './ControlPlane.module.css';

import Card from "../../components/card/Card";
import VelezIcon from "@/assets/icons/velez/VelezIcon";

import MatreshkaIcon from "@/assets/icons/matreshka/MatreshkaIcon";

export default function ControlPageWidget() {
    const components = [
        {
            tittle: 'Matreshka',
            icon: <MatreshkaIcon/>
        },
        {
            tittle: 'Velez',
            icon: <VelezIcon/>
        },
    ]

    return (
        <div className={styles.ControlPlane}>
            {
                components
                    .map((v) =>
                        <div className={styles.ServiceCard}>
                            <Card
                                tittle={v.tittle}
                                icon={v.icon}
                            />
                        </div>)
            }
        </div>
    )
}
