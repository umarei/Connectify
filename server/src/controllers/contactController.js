const Contact = require('../models/Contact');

// Create a new contact
exports.createContact = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    const contact = await Contact.create({ firstName, lastName, email, phone, company, jobTitle });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

// Get all contacts
exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
};

// Update a contact
exports.updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: updatedContact });
  } catch (error) {
    next(error);
  }
};

// Delete a contact
exports.deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};
