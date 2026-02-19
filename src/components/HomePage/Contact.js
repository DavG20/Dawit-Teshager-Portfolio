import React, { useState } from "react";

import { FaChevronRight } from "react-icons/fa";

// By default mail will be sent to this address when no endpoint is configured
const DEFAULT_RECEIVER = "dawit.teshager2015@gmail.com";

function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState({
        name: "",
        email: "",
        text: "",
    });

    // Send either via an endpoint (set REACT_APP_CONTACT_ENDPOINT) or fallback to mailto
    async function handleSend() {
        setError(null);

        // basic validation
        if (!message.name || !message.email || !message.text) {
            setError("Please fill name, email and message.");
            return;
        }

        const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
        setSending(true);

        try {
            if (endpoint) {
                const res = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...message }),
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text || `Request failed with ${res.status}`);
                }
            } else {
                const subject = encodeURIComponent(`Contact from ${message.name}`);
                const body = encodeURIComponent(
                    `Name: ${message.name}%0AEmail: ${message.email}%0A%0A${message.text}`
                );
                    const cc = encodeURIComponent(message.email);
                    window.location.href = `mailto:${DEFAULT_RECEIVER}?subject=${subject}&cc=${cc}&body=${body}`;
            }

            setMessageSent(true);
            setMessage({ name: "", email: "", text: "" });
        } catch (err) {
            setError(err.message || "Failed to send message");
        } finally {
            setSending(false);
        }
    }

    return (
        <div
            id="contact"
            className="text-stone-300 w-full flex flex-col items-center gap-2 md:px-20 mb-8 mt-10 font-roboto "
        >
            <div className="flex flex-row justify-between md:justify-between w-full items-center mb-8 md:mb-16">
                <div className="h-0.5 flex-grow bg-gradient-to-l from-darker-2 to-light-1"></div>
                <div className="h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45"></div>
                <div className="font-bold text-3xl md:text-5xl text-darker-2 mx-3 md:mx-6">Let's Chat</div>
                <div className="h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45"></div>
                <div className="h-0.5 flex-grow bg-gradient-to-r from-darker-2 to-light-1"></div>
            </div>

            <div className="flex w-full">
                <div className="grid grid-cols-6 gap-4 w-full">
                    <div className="hidden md:flex md:col-span-1 xl:col-span-2"></div>

                    <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-2 flex flex-col gap-4">
                        <input
                            type="text"
                            value={message.name}
                            className="rounded-lg py-3 px-4 text-darker-1"
                            placeholder="Full name"
                            onChange={(e) => setMessage({ ...message, name: e.target.value })}
                        />
                        <input
                            type="email"
                            value={message.email}
                            className="rounded-lg py-3 px-4 text-darker-1"
                            placeholder="Email"
                            onChange={(e) => setMessage({ ...message, email: e.target.value })}
                        />
                        <textarea
                            type="text"
                            value={message.text}
                            cols="30"
                            rows="5"
                            placeholder="Message"
                            className="rounded-lg py-3 px-4 text-darker-1"
                            onChange={(e) => setMessage({ ...message, text: e.target.value })}
                        />

                        {error && <div className="text-red-400">{error}</div>}

                        <div className="flex items-center justify-center  gap-4 w-full">
                            <div className="flex group items-center">
                                <FaChevronRight className="text-red-400 w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200" />
                                <button
                                    onClick={handleSend}
                                    disabled={sending}
                                    className="px-6 py-2 rounded-lg font-roboto text-white text-md bg-darker-2 ml-0 group-hover:ml-2 group-hover:text-red-400 duration-200 disabled:opacity-60"
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {messageSent && (
                                <div className="font-roboto text-darker-2 text-md">Thank you for your message!</div>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex md:col-span-1 xl:col-span-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;