import React from 'react'
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

export function signout() {
  localStorage.removeItem("user");
    return navigate("/landing-page");
}