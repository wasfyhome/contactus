"use client";
import React, { useState } from "react";
// import nodemailer from "nodemailer";
const AboutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  /*   const onSubmit = async (e) => {
    e.preventDefault();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your@email.com",
        pass: "your_password",
      },
    });

    const mailOptions = {
      from: email,
      to: "your@email.com",
      subject: "Contact form submission",
      text: message,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        setMessageSent(true);
      }
    });

    setMessageSent(true);
  }; */

  if (messageSent) {
    return <div>Thank you for your message!</div>;
  }

  return (
    <div>
      <form
        onSubmit={console.log("done")}
        class="flex flex-col gap-4 p-32 w-[50%]"
      >
        <div class="flex flex-col">
          <label class="text-sm font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="w-full border p-2 rounded"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="w-full border p-2 rounded"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            class="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default AboutPage;
