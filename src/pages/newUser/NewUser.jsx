import React, { useState } from 'react'
import "./NewUser.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewUser() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [transaction, setTransaction] = useState('');
    const [userID, setUserID] = useState(1);

    const addClickHandler = (event) => {
        event.preventDefault();
        let lastId = localStorage.getItem('userID') ? +localStorage.getItem('userID') : userID;
        fetch('https://saeid-4edd5-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                status,
                transaction,
                id: lastId,
                img: 'images/default-prof.PNG'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setOpen(true);
            setUsername('');
            setEmail('');
            setStatus('');
            setTransaction('');
            localStorage.setItem('userID', lastId + 1);
        });
    }
    return (
        <div className='newUser'>
            <div className="newUser__wrapper">
                <h3 className="newUser__title">Add New User</h3>
                <form className="form">
                    <div className="form__item">
                        <label htmlFor="username" className='form__label'>Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id='username'
                            className='form__input'
                            placeholder='username ...' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email" className='form__label'>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id='email'
                            className='form__input'
                            placeholder='exp: asd@gmail.com' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="status" className='form__label'>Status</label>
                        <input
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            type="text"
                            id='status'
                            className='form__input'
                            placeholder='status ...' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="transaction" className='form__label'>Transaction</label>
                        <input
                            value={transaction}
                            onChange={(e) => setTransaction(e.target.value)}
                            type="text"
                            id='transaction'
                            className='form__input'
                            placeholder='transaction' />
                    </div>
                    <button className="submit__btn" onClick={addClickHandler}>Submit</button>
                </form>
            </div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: '#333',
                        color: '#fff',
                    },
                }}>
                <DialogTitle id="alert-dialog-title">
                    {"Success Alert"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ color: '#fff' }}>
                        User has been added successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                        onClick={() => setOpen(false)}
                        style={{ color: '#fff' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}