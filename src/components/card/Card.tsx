import React from "react";

import styles from './card.module.css'

export type CardProps = {
    tittle: string
    icon: React.JSX.Element
}

export default function Card(props: CardProps) {
    return (
        <div className={styles.Card}>
            <div className={styles.CardTop}>
                <div className={styles.ServiceIcon}>
                    {props.icon}
                </div>
                <div className={styles.Tittle}>
                    {props.tittle}
                </div>
            </div>
            <div className={styles.CardBottom}>
                <div className={styles.Content}>
                    {'Surely hills examines comparison mirror beings pork, surname race vegas south carry fabrics athletic, basename workshop payment parent identifier feed arguments, milton. '}
                </div>
            </div>
        </div>
    )
}
