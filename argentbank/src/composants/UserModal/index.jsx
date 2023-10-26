import React, { useState } from "react";
import { useSelector } from 'react-redux'; 
import { selectToken } from '../../slice/index'; 
import "../../css/app.css";

function UserModal({ isOpen, onClose, onSave ,firstName, lastName }) {
  const [newUsername, setNewUsername] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const token = useSelector(selectToken); // Utilise le sélecteur pour obtenir le jeton
  console.log(token);
  
  const handleSave = async () => {
    setIsSaving(true);

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Utilise le jeton d'authentification dans l'en-tête
        },
        body: JSON.stringify({
          userName: newUsername,
        }),
      });

      if (response.status === 200) {
        onSave(newUsername);
        onClose();
      } else if (response.status === 401) {
        console.error("Unauthorized: Token is missing from header");
      } else {
        console.error("Une erreur s'est produite lors de la mise à jour du nom d'utilisateur.");
      }
    } catch (error) {
      console.error("Erreur lors de l'appel API:", error);
    } finally {
      setIsSaving(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName} 
          disabled // Désactive le champ
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName} 
          disabled // Désactive le champ
        />
        <button onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save"}
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}


export default UserModal;