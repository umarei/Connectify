import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = ({ onSubmit, initialData = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });

  useEffect(() => {
    // Pre-fill form data when editing
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        company: initialData.company || '',
        jobTitle: initialData.jobTitle || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="phone"
        label="Phone"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextField
        name="company"
        label="Company"
        variant="outlined"
        value={formData.company}
        onChange={handleChange}
      />
      <TextField
        name="jobTitle"
        label="Job Title"
        variant="outlined"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        {isEditing ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Box>
  );
};

export default ContactForm;
