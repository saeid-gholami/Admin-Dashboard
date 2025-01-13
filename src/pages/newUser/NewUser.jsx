import React from 'react'
import "./NewUser.css"

export default function NewUser() {
    return (
        <div className='newUser'>
            <div className="newUser__wrapper">
                <h3 className="newUser__title">Add New User</h3>
                <form className="form">
                    <div className="form__item">
                        <label htmlFor="username" className='form__label'>Username</label>
                        <input type="text" id='username' className='form__input' placeholder='username ...' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email" className='form__label'>Email</label>
                        <input type="email" id='email' className='form__input' placeholder='exp: asd@gmail.com' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="status" className='form__label'>Status</label>
                        <input type="text" id='status' className='form__input' placeholder='status ...' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="transaction" className='form__label'>Transaction</label>
                        <input type="text" id='transaction' className='form__input' placeholder='transaction' />
                    </div>
                    <button className="submit__btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
