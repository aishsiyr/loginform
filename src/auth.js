import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Grid, ThemeProvider } from '@mui/material';
import theme from './theme'; // Import the custom theme

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSuccess, setIsSuccess] = useState(false); // State for indicating login/signup success
  const [error, setError] = useState(""); // State for displaying validation error

  const handleChange = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setIsSuccess(false);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation check - Ensure all required fields are filled
    if (!input.name || (!isSignup && !input.password) || (isSignup && !input.email)) {
      setError("Please fill in all required fields.");
      setIsSuccess(false); // Reset success state
    } else {
      // Simulate a successful login/signup for demonstration purposes
      // Replace this with your actual authentication logic
      setIsSuccess(true); // Set login/signup success to true
      setError(""); // Clear the error message
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '16px', maxWidth: '400px', margin: '0 auto' }}>
            <Typography variant="h5" gutterBottom>
              {isSuccess ? 'Login Successful!' : isSignup ? 'Sign Up' : 'Login'} Form
            </Typography>
            {isSuccess ? ( // Render success message if login/signup was successful
              <Typography variant="body1" color="success">
                Congratulations! You have successfully logged in/sign up.
              </Typography>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  name='name'
                  value={input.name}
                  onChange={handleChange}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                {isSignup && (
                  <TextField
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                    label="Email ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                )}
                <TextField
                  value={input.password}
                  onChange={handleChange}
                  name='password'
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                {error && (
                  <Typography variant="body2" style={{ color: '#f52a2a', marginTop: '8px' }}>
                    {error}
                  </Typography>
                )}
                <Button onClick={toggleMode}>
                  {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  style={{ marginTop: '16px' }}
                >
                  {isSignup ? 'Sign Up' : 'Login'}
                </Button>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Auth;
 