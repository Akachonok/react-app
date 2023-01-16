import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Alert, Button, CircularProgress, Snackbar, TextField } from "@mui/material";

import axios from "axios";

import './login-form.css'
import { useInput } from "../../../hooks/input";

export function LoginForm() {
  const login = useInput('kminchelle')
  const password = useInput('0lelplR')
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const navigateToUrl = useNavigate();
  const handleClose = () => setOpen(false);
  

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)
    
    await axios.post('https://dummyjson.com/auth/login', {
      username: login.value,
      password: password.value
    }).then(() => {
      navigateToUrl('/home')
    }).catch((error) => {
      setError(error.message)
      setOpen(true)
    }).finally(() => setLoading(false))
  }

  return (
    <div className="logn-form-container">
      <span className="login-sign-in-text">Sign-in</span>

      <form className="logn-form" onSubmit={submitForm}>
        <TextField
          variant="outlined"
          className="login-form-text-field"
          type="text" 
          placeholder="Enter user login ..."
          {...login}
        > </TextField>

        <TextField
          variant="outlined"
          className="login-form-text-field"
          type="password" 
          placeholder="Enter user password ..." 
          {...password}
        > </TextField>

        <Button 
          className="submit-button w-100"
          disabled={loading}
          type="submit"
          variant="contained"
        > Login </Button>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          { error }
        </Alert>
      </Snackbar>

      {loading && <CircularProgress className="progress-style" color="primary" />}
    </div>

  )
}