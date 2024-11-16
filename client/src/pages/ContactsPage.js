import React, { useState, useEffect, useCallback } from 'react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import PaginationComponent from '../components/Pagination';
import { getAllContacts, addContact, updateContact, deleteContact } from '../services/contactService';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PAGE_SIZE = 5; // Contacts per page

  const fetchContacts = useCallback(async () => {
    try {
      const data = await getAllContacts(); // Assume backend returns full list
      setTotalPages(Math.ceil(data.length / PAGE_SIZE));
      const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
      setContacts(paginatedData);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleAddOrUpdate = async (contact) => {
    try {
      if (selectedContact) {
        await updateContact(selectedContact._id, contact);
      } else {
        await addContact(contact);
      }
      fetchContacts();
      setSelectedContact(null);
    } catch (error) {
      console.error('Failed to add/update contact:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  return (
    <div>
      <ContactForm
        onSubmit={handleAddOrUpdate}
        initialData={selectedContact}
        isEditing={!!selectedContact}
      />
      <ContactTable
        contacts={contacts}
        onEdit={(contact) => setSelectedContact(contact)}
        onDelete={handleDelete}
      />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ContactsPage;
