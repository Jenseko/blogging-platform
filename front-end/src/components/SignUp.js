const signup = () => {
    return (
        <>
            <form id='login-form'>
                <input type="text" id="username-input" placeholder="Benutzername" />
                <input type="text" id="email-input" placeholder="Email" />
                <input type="text" id="password-input" placeholder="Passwort" />
                <button type="submit">Registrieren</button>
            </form>
        </>
    );
}

export default signup;