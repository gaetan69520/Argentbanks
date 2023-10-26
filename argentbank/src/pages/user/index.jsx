import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectToken } from '../../slice/index';
import Header from "../../composants/Header";
import "../../css/app.css";
import Account from "../../composants/Account";
import UserModal from "../../composants/UserModal"; 

function User() {
  const isUserPage = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(""); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const token = useSelector(selectToken);

  useEffect(() => {
    // Fonction asynchrone pour effectuer l'appel API
    async function fetchUserProfile() {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST", 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (response.status === 200) {
          const data = await response.json();
          // Met à jour les états locaux avec le prénom et le nom de l'utilisateur
          setFirstName(data.body.firstName);
          setLastName(data.body.lastName);
        } else {
          console.error("Erreur lors de la récupération du profil de l'utilisateur.");
        }
      } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
      } 
    }
  
    // Appel la fonction pour récupérer le profil de l'utilisateur
    fetchUserProfile();
  }, [token]);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSave = (newUsername) => {
    // Met la logique de sauvegarde du nom d'utilisateur (nouveau nom d'utilisateur)
    console.log("Username to save:", newUsername);
     // Met à jour le nom d'utilisateur dans le composant UserModal
     setNewUsername(newUsername);
    // Ferme la modal
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <Header isUserPage={isUserPage} username={newUsername} firstName={firstName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <button className="edit-button" onClick={openModal}>
            Edit Name
          </button>
        </div>

        <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        firstName={firstName} 
        lastName={lastName}   
       />


        <h2 className="sr-only">Accounts</h2>
        <div className="accounts-container">
          <Account
            title="Argent Bank Checking"
            accountNumber="x8349"
            amount="$2,082.79"
            amountDescription="Available Balance"
          />
          <Account
            title="Argent Bank Savings"
            accountNumber="x6712"
            amount="$10,928.42"
            amountDescription="Available Balance"
          />
          <Account
            title="Argent Bank Credit Card"
            accountNumber="x8349"
            amount="$184.30"
            amountDescription="Current Balance"
          />
        </div>
      </main>
    </div>
  );
}

export default User;