import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { SiMinutemailer } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { MdConnectWithoutContact, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import gsap from "gsap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const containerRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for cards
      gsap.from(".contact-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Background decorative orbs animation
      gsap.to(".bg-orb", {
        y: "20px",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (!formData.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
    if (!formData.email.trim()) { tempErrors.email = "Email is required"; isValid = false; } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Email is invalid"; isValid = false; }
    if (!formData.subject.trim()) { tempErrors.subject = "Subject is required"; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Message is required"; isValid = false; }
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
      await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  return (
    <main ref={containerRef} id="contact-section" className="relative py-24 bg-[#070707] text-white min-h-screen overflow-hidden">
      
      {/* Background Decorative Orbs */}
      <div className="bg-orb absolute top-40 -left-20 w-80 h-80 bg-[#00B477]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="bg-orb absolute bottom-20 -right-20 w-80 h-80 bg-[#006F74]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-11/12 md:w-9/12 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            Get In <span className="text-[#00B477]">Touch</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00B477] rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Ready to start a project or just want to say hi? My inbox is always open.
          </p>
        </div>

        <section className="flex flex-col lg:flex-row justify-center gap-8">
          
          {/* Contact Info Card */}
          <div className="contact-card flex-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IoIosContact className="text-[#00B477]" size={32} />
                <h3 className="text-2xl font-bold">Contact Info</h3>
              </div>
              <p className="text-gray-400">Feel free to reach out via email or phone.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <MdEmail />, title: "Email", val: "mahatabcall56@gmail.com", link: "mailto:mahatabcall56@gmail.com" },
                { icon: <MdConnectWithoutContact />, title: "WhatsApp", val: "+8801743643156", link: "https://wa.me/8801743643156" },
                { icon: <FaLocationDot />, title: "Location", val: "Barisal, Bangladesh", link: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl border border-transparent hover:border-[#00B477]/30 hover:bg-[#00B477]/5 transition-all duration-300 group">
                  <div className="text-[#00B477] text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-lg font-medium text-gray-200">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Message Form Card */}
          <div className="contact-card flex-[1.5] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <SiMinutemailer className="text-[#00B477]" size={32} />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} focus:border-[#00B477] focus:ring-1 focus:ring-[#00B477]/50 outline-none transition-all`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="text-red-500 text-xs pl-2">{errors.name}</span>}
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} focus:border-[#00B477] focus:ring-1 focus:ring-[#00B477]/50 outline-none transition-all`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="text-red-500 text-xs pl-2">{errors.email}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.subject ? "border-red-500" : "border-white/10"} focus:border-[#00B477] focus:ring-1 focus:ring-[#00B477]/50 outline-none transition-all`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors.subject && <span className="text-red-500 text-xs pl-2">{errors.subject}</span>}
              </div>

              <div className="space-y-1">
                <textarea
                  placeholder="Tell me about your project..."
                  rows="5"
                  className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"} focus:border-[#00B477] focus:ring-1 focus:ring-[#00B477]/50 outline-none transition-all resize-none`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="text-red-500 text-xs pl-2">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#00B477] hover:bg-[#00d48c] text-black py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Shoot Message"}
                <Send size={18} />
              </button>
            </form>

            {status === "success" && (
              <div className="mt-6 p-4 rounded-xl bg-[#00B477]/10 border border-[#00B477]/50 text-[#00B477] text-center font-medium">
                Message received! I'll get back to you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-500 text-center font-medium">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}