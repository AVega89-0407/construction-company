import { useState } from 'react';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Tack för ditt meddelande!');
    console.log(formData);
  }

  return { formData, handleChange, handleSubmit };
}