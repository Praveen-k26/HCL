import React, {useState} from "react";
import './loginPage.styles.scss';
import CustomButton from "../../components/CustomButton/customButton.component";
import {useHistory, withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";

import allActions from "../../redux/actions";



function LoginPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state=> state.currentUser)

    const [user, SetUser] = useState(null);

    const handleChange = (e) => {
        let userName = e.target.value;
        SetUser({name: userName})
    }

    const handleSubmit = () => {
        dispatch(allActions.userActions.setUser(user))
        history.push('/consolidationStation')
    }


    return(
        <div className='login-page'>
            <div className='imageDiv'>
                <img src={require('./Wawa.jpg')} alt='logo'/>
            </div>
            <div className='formDiv'>
                <h2 className='title'>Login</h2>
                <form className='form' oneSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='User Name'
                        required={true}
                        className='textField'
                        onChange={e=>handleChange(e)}
                    /><br/>
                    <input
                        type='password'
                        placeholder='Password'
                        required={true}
                        className='textField'
                    /><br/>
                    <CustomButton
                        loginButton
                        type='submit'
                        onClick={()=> history.push('/chef')}
                    >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage)

