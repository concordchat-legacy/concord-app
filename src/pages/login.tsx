import { Navigate } from 'react-router-dom';
import { State } from '../cache/state';
import { Button, Card, CardActions, CardContent, CardHeader, CssBaseline, TextField } from '@mui/material';
import { Container } from '@mui/material';
import axios from 'axios'

function Login() {
    let state = new State();
    let passwordi: string;
    let emaili: string;

    if (state.token !== null) {
        return <Navigate to='/app' />
    }

    function handlePasswordChange(event: any) {
        passwordi = event.target.value;
    };

    
    function handleEmailChange(event: any) {
        emaili = event.target.value;
    };

    function LogIn(_: any) {
        // let url: string = window.GLOBAL_ENV.API_ENDPOINT + window.GLOBAL_ENV.API_VERSION + '/users/@me/tokens'
        axios.get(
            '',
            {
               // email: emaili,
               // password: passwordi
            }
        )
    }

    return (
      <div>
        <CssBaseline />
        <Container maxWidth={false}>
            <Card sx={{backgroundColor: '#2C2F33', marginTop: '10'}}>
                <CardHeader title='Concord Login' />
                <CardContent sx={{backgroundColor: '#2C2F33'}}>
                    <div>
                        <TextField id='email' type='email' onChange={handleEmailChange} margin='normal' label='email' />
                        <TextField id='password' type='password' onChange={handlePasswordChange} margin='normal' label='password' />
                    </div>
                </CardContent>
                <CardActions>
                    <Button 

                    />
                </CardActions>
            </Card>
        </Container>
      </div>
    );
  }
  
  export default Login;
  