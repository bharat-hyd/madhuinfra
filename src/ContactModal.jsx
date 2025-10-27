import React, { useState } from "react";

function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/sendMail.php", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error: Could not connect to the server.");
    }

    setLoading(false);

    // Optional: auto-hide status after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <>
      <style>
        {`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex; justify-content: center; align-items: center;
          z-index: 999;
        }
        .modal {
          background: white;
          width: 100%;
          max-width: 600px;
          padding: 50px;
          box-sizing: border-box;
          position: relative;
          border-radius: 12px;
        }
        .modal input, .modal textarea {
          padding: 10px 15px;
          width: 100%;
          box-sizing: border-box;
          display: block;
          margin-bottom: 10px;
          font-size: 16px;
          outline: none;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .modal button {
          padding: 10px 15px;
          display: block;
          margin-bottom: 10px;
          font-size: 16px;
          color: white;
          background: red;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s;
        }
        .modal button:disabled {
          background: #aaa;
          cursor: not-allowed;
        }
        .close-btn {
          position: absolute;
          top: 10px; right: 10px;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        .status {
          text-align: center;
          font-weight: bold;
          margin-top: 15px;
          font-size: 16px;
          padding: 8px;
          border-radius: 5px;
        }
        .status.success {
          color: #155724;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
        }
        .status.error {
          color: #721c24;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
        }
      `}
      </style>

      <div className="modal-overlay">
        <div className="modal">
          <h2>Contact Us</h2>
          <form onSubmit={handleForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className={`status ${status.includes("✅") ? "success" : "error"}`}>
              {status}
            </p>
          )}

          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
