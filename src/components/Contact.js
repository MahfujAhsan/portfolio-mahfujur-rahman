import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from "emailjs-com";
import { useRef } from 'react';
import React from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d4uq5k2', 'template_2gs271t', form.current, 'B-yP0YDdTEBG9uOYN');
    };
return (
    <div id='contact' className='container py-5'>
        <div className='text-center text-white mb-5'>
            <h4>Get In Touch</h4>
            <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Contact Me</h2>

        </div>
        <div className='row'>
            <div className='col-5'>
                <div style={{ backgroundColor: "#0B5ED7" }} className='text-white text-center py-3 rounded-3 w-75 mx-auto'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
                    <h2 className='fs-4'>Email</h2>
                    <p>mahfujur.rahman1@outlook.com</p>
                    <a className='text-decoration-none text-white' href="mailto:mahfujur.rahman1@outlook.com" target="_blank">Send a message</a>
                </div>
                <div style={{ backgroundColor: "#0B5ED7" }} className='text-white text-center py-3 rounded-3 my-3 w-75 mx-auto'>
                    <FontAwesomeIcon icon={faFacebookMessenger} size="2x" />
                    <h2 className='fs-4'>Facebook Messenger</h2>
                    <p>AhsaanMahfuj</p>
                    <a className='text-decoration-none text-white' href="https://m.me/AhsaanMahfuj" target="_blank">Send a message</a>
                </div>
                <div style={{ backgroundColor: "#0B5ED7" }} className='text-white text-center py-3 rounded-3 w-75 mx-auto'>
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    <h2 className='fs-4'>WhatsApp</h2>
                    <p>(+880) 1776529824</p>
                    <a href="https://wa.me/+8801776529824" target="_blank">Send a message</a>
                </div>
            </div>
            <div className='col-7 w-50'>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="form-outline">
                        <input type="text" id="typeText" class="form-control border border-2 border-white py-3" />
                        <label class="form-label text-primary fw-bold mt-2" for="typeText">Your Full Name</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="email" id="typeEmail" class="form-control border border-2 border-white py-3" />
                        <label class="form-label text-primary fw-bold mt-2" for="typeEmail">Email input</label>
                    </div>
                    <div class="form-outline">
                        <textarea class="form-control border border-2 border-white py-3" id="textAreaExample" rows="6"></textarea>
                        <label class="form-label text-primary fw-bold mt-2" for="textAreaExample">Message</label>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <input type="submit" value="Send" class="btn btn-primary w-50" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default Contact;