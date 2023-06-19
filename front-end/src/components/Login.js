const login = () => {
    return (
        <>
            <form id='login-form'>
                <input type="text" id="email" placeholder="Email" />
                <input type="text" id="password" placeholder="Passwort" />
                <button type="submit">Einloggen</button>
            </form>
        </>
    );
}

export default login;
