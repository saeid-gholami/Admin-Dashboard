import React from 'react'
import './Topbar.css'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Topbar() {
    return (
            <div className='topbar'>
                <div className='topbar__wrapper'>
                    <div className="topbar__left">
                        <SpaceDashboardIcon className='topbar__logo-icon' />
                        <span className='topbar__logo'>Admin Dashboard</span>
                    </div>
                    <div className="topbar__right">
                        <div className='topbar__icon'  title='Notifications'>
                            <NotificationsActiveOutlinedIcon />
                            <span className='topbar__badge'>2</span>
                        </div>
                        <div className='topbar__icon' title='Languages'>
                            <LanguageOutlinedIcon />
                            <span className='topbar__badge'>5</span>
                        </div>
                        <div className='topbar__icon' title='Settings'>
                            <SettingsOutlinedIcon />
                        </div>
                        <img src="images/Capture.JPG"  className='topbar__avatar'/>
                    </div>
                </div>
            </div>
    )
}
