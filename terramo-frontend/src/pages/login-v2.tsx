// src/features/auth/Login.tsx
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/authApi";
import { useAppDispatch } from "../app/hooks";
import { setCredentials } from "../features/auth/authSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-hot-toast";

const LoginData = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    grant_type: "password",
    client_id: "",
    client_secret: ""
  });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    try {
      const { access_token, refresh_token } = await login({
        username: formData.username,
        password: formData.password
      }).unwrap();

      dispatch(setCredentials({ 
        access_token: access_token,
        refreshToken: refresh_token,
        userData: { email: formData.username }
      }));

    
      toast.success("Login successful");
      navigate("/stakeholders"); 
    } catch (err) {
      console.log("Login error", err)
      toast.error(
        (err as any)?.data?.message || "Login failed. Please try again."
      );
    }
  };

  if (isLoading) return <LoadingSpinner fullScreen />;

  return (
    <Container maxWidth="sm" component="main">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Anmelden
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Benutzername"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Passwort"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Anmelden'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginData;