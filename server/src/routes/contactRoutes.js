const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// Define routes
router.post('/contacts', createContact);
router.get('/contacts', getAllContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;
