import React from 'react';
import './widgetsm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';

export default function Widgetsm() {
    const [members, setMembers] = React.useState(newMembers);
    return (
        <div className='widgetsm'>
            <span className='widgetsm__title'>New Join Members</span>
            <ul className="widgetsm__list">
                {members.map(member => (
                    <li className="widgetsm__list-item" key={member.id}>
                        <img src={member.img} className="widgetsm__img" />
                        <div className="widgetsm__user">
                            <span className="widgetsm__username">{member.username}</span>
                            <span className="widgetsm__user-title">{member.title}</span>
                        </div>
                        <button className='widgetsm__button'>
                            <VisibilityIcon className='widgetsm__icon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
