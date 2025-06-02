"use client";

import { useRef, useState } from "react";
import styles from "./Form.module.scss";

export default function Form() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmittedAt = useRef(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(event.target);
    if (formData.get("email_confirm")) {
      setMessage("Blocked as spam.");
      setIsSubmitting(false);
      return;
    }

    const data = {
      name: formData.get("name"),
      phone: formData.get("telefon"),
      message: formData.get("textarea"),
    };

    try {
      const now = Date.now();
      if (now - lastSubmittedAt.current < 30000) {
        setMessage("Please wait before sending another message.");
        setIsSubmitting(false);
        return;
      }

      lastSubmittedAt.current = now;

      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setMessage("Message sent. We'll contact you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("There was an error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="form"
        className={styles.form}
      >
        <div className={styles.formTitle}>
          <span>send me a message</span>
        </div>

        <div className={styles.inputContainer}>
          <input
            placeholder="Name"
            type="text"
            required
            name="name"
            className={styles.inputName}
          />
        </div>

        <section className={styles.stars}>
          <span className={styles.fallingText}>IT</span>
          <span className={styles.fallingText}>IT</span>
          <span className={styles.fallingText}>IT</span>
          <span className={styles.fallingText}>IT</span>
          <span className={styles.fallingText}>IT</span>
          <span className={styles.fallingText}>IT</span>
        </section>

        <div className={styles.inputContainer}>
          <input
            placeholder="Telefon"
            type="tel"
            required
            name="telefon"
            className={styles.inputTelefon}
          />
        </div>

        <div className={styles.inputContainer}>
          <input
            placeholder="Message"
            type="text"
            required
            name="textarea"
            className={styles.inputTelefon}
          />
        </div>
        <input
          type="text"
          name="email_confirm"
          className={styles.honeypot}
          autoComplete="off"
        />

        <button className={styles.submit} type="submit" disabled={isSubmitting}>
          <span className={styles.submitText}>
            {message ? message : isSubmitting ? "Sending..." : "Send"}
          </span>
        </button>
      </form>
    </div>
  );
}
