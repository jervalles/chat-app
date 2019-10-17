import React from "react";
import Contact from './Contact';

// An array of objects
const ContactData = [
    {
        name: "Bruce Soto",
        avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    {
        name: "Rafael Rogers",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        name: "Tracy Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Melinda Diaz",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  }
  ];

  const ContactList = () => (
    <div>
      {ContactData.map(item => (
    <Contact name={item.name} avatar={item.avatar} online={item.online} />
  ))}
    </div>
  );

export default ContactList;
