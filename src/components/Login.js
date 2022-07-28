import { useState, useContext } from 'react';
import LabeledTextInput from './LabeledTextInput';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const validUser = {
    id: 1,
    username: 'james',
    email: 'james@email.com',
    password: 'password',
};

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginError, setShowLoginError] = useState(false);

    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (email === validUser.email && password === validUser.password) {
            setLoggedInUser(validUser);
            navigate('/CardForm');
        } else {
            setShowLoginError(true);
        }
    }

    return (
        <>
            <div>Login page</div>

            <form onSubmit={handleSubmit}>
                <LabeledTextInput name="Email" value={email} setValue={setEmail} />
                <LabeledTextInput 
                    name="Password" 
                    value={password} 
                    setValue={setPassword} 
                    inputType="password"
                />
                <button primary type="submit">
                    Login
                </button>
            </form>
            {showLoginError && <div>User not found.</div>}
        </>
    )

}