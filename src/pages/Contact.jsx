import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { SiMinutemailer } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { MdConnectWithoutContact, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  console.log(import.meta.env.VITE_EMAIL_KEY);
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_EMAIL_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main
      className=" py-10 lg:pt-[0rem] bg-[#060407]
     text-white min-h-screen "
    >
      <h1 className=" text-4xl font-bold text-green-400 text-center py-20">
        Contact me
      </h1>

      <section className="flex flex-col md:flex-row justify-center gap-6 px-4 sm:px-6 lg:px-8 py-10 w-11/12 md:w-9/12 mx-auto">
      {/* Contact Info Card */}
      <div className="flex-1 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg space-y-5">
        <div className="flex items-center gap-3">
          <IoIosContact className="p-2 bg-green-400/30 text-green-600 rounded-2xl" size={45} />
          <h2 className="text-3xl font-bold">Contact Information</h2>
        </div>
        <p className="text-base text-gray-300">
          Fill out the form or reach out directly through these channels:
        </p>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
            <MdEmail size={30} className="text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg text-gray-200">mahatabcall56@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
            <MdConnectWithoutContact size={30} className="text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Phone & WhatsApp</h3>
              <p className="text-lg text-gray-200">+8801743643156</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
            <FaLocationDot size={30} className="text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-lg text-gray-200">Barisal, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Form Card */}
      <div className="flex-1 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <SiMinutemailer className="p-2 bg-green-400/30 text-green-600 rounded-2xl" size={45} />
          <h2 className="text-3xl font-bold">Send a Message</h2>
        </div>
        <p className="text-base text-gray-300 mb-6">
          Have a question or want to work together? Send me a message.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.subject ? "border-red-500" : "border-gray-600"
              } focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition`}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.message ? "border-red-500" : "border-gray-600"
              } focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition resize-none`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-4 text-center font-medium ${
              status.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            <p>{status}</p>
          </div>
        )}
      </div>
    </section>
    </main>
  );
}
