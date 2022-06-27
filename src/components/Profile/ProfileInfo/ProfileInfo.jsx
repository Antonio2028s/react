import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://sun9-west.userapi.com/sun9-69/s/v1/ig2/N6ORGANh6Lsc1fVnlGpZ0j-_2vr9UZF55yQLbnlb-zit9B-dcN_lnZ0rHzqTcyb3tI3WZTTfOHq8URbb518GcpZ2.jpg?size=1000x259&quality=96&type=album'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;