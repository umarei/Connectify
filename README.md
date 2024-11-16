# **Connectify**

A simple and efficient **Contact Management System** built with **React.js**, **Node.js**, and **MongoDB**. This application allows users to manage their contacts by adding, editing, viewing, deleting, and searching contacts.

---



![WhatsApp Image 2024-11-16 at 17 31 11_1f28901d](https://github.com/user-attachments/assets/93b1d6eb-3fb5-49fa-9555-8771d783ffce)



## **Features**

- Add new contacts with detailed information (e.g., name, email, phone, company, job title).
- View contact details in a modal.
- Update existing contacts.
- Delete unwanted contacts.
- Search and filter contacts by any field.
- Paginated contact list for better performance and user experience.
- Modern **dark-themed UI** with Material-UI components.

---

## **Tech Stack**

- **Frontend**: React.js with Material-UI for responsive and elegant UI.
- **Backend**: Node.js with Express.js for creating RESTful APIs.
- **Database**: MongoDB for efficient data storage and retrieval.

---

## **Installation**

### **Prerequisites**
Ensure the following are installed on your system:
- **Node.js** (v18 or later recommended)
- **MongoDB** (Running locally or in the cloud)
- **Git**

---

### **Steps to Set Up**

#### **1. Clone the Repository**
```bash
git clone https://github.com/username/Connectify.git
cd Connectify
```

#### **2. Set Up Backend**
Navigate to the backend directory:
```bash
cd server
```
#### **Install dependencies**
```bash
npm install
```
#### **Create a .env file in the server directory**
```bash
touch .env
```



#### **Add the following variables to `.env`**
```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/connectify
```

#### **Start the backend server**
```bash
npm run dev
```


#### **3. Set Up Frontend**
Navigate to the frontend directory:
```bash
cd ../client
```

#### **Install dependencies**
```bash
npm install
```

#### **Create a .env file in the client directory**
```bash
touch .env
```
#### **Add the following variable to `.env`**
```env
REACT_APP_API_URL=http://localhost:3001/api
```

#### **Start the React development server**
```bash
npm start
```

##PROJECT STRUCTURE


```bash

Connectify/
│
├── client/                # Frontend code
│   ├── public/            # Static assets
│   ├── src/               # Source code
│       ├── components/    # Reusable components (e.g., forms, tables, modals)
│       ├── pages/         # Pages for routing
│       ├── services/      # API service functions
│       ├── App.js         # Main React component
│       ├── index.js       # Entry point
│       ├── styles.css     # Global styles
│
├── server/                # Backend code
│   ├── src/               # Source code
│       ├── controllers/   # Business logic
│       ├── models/        # Mongoose schemas
│       ├── routes/        # API endpoints
│       ├── app.js         # Express app setup
│       ├── server.js      # Server entry point
│   ├── .env               # Environment variables for backend
│
├── README.md              # Project documentation
├── .gitignore             # Ignored files for Git
├── package.json           # Project metadata (root workspace)
└── LICENSE                # License information

```




## **API Endpoints**

Base URL: `http://localhost:3001/api`

| **Method** | **Endpoint**     | **Description**              |
|------------|------------------|------------------------------|
| GET        | `/contacts`      | Fetch all contacts           |
| POST       | `/contacts`      | Add a new contact            |
| PUT        | `/contacts/:id`  | Update an existing contact   |
| DELETE     | `/contacts/:id`  | Delete a contact             |
