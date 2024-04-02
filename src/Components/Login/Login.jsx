import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const handleGoogle =()=>{
        console.log('google mama is coming');
    }
    return (
        <div>
            <button onClick={handleGoogle}>Google Login</button>
        </div>
    );
};

export default Login;