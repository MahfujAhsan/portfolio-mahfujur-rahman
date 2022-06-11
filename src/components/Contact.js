import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine" className='col-12 col-lg-5'>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3 w-75 mx-auto'>
                        <FontAwesomeIcon className='text-danger' icon={faEnvelopeOpen} size="2x" />
                        <h2 className='fs-4'>Email</h2>
                        <p>mahfujur.rahman1@outlook.com</p>
                        <a className='text-decoration-none text-white font-monospace fw-bold' href="mailto:mahfujur.rahman1@outlook.com" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3 my-3 w-75 mx-auto'>
                        <FontAwesomeIcon icon={faFacebookMessenger} size="2x" style={{ color: '#0695FF' }} />
                        <h2 className='fs-4'>Facebook Messenger</h2>
                        <p>AhsaanMahfuj</p>
                        <a className='text-decoration-none text-white font-monospace fw-bold' href="https://m.me/AhsaanMahfuj" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3 w-75 mx-auto'>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#2BD348' }} />
                        <h2 className='fs-4'>WhatsApp</h2>
                        <p>(+880) 1776529824</p>
                        <a className='text-decoration-none text-white font-monospace fw-bold' href="https://wa.me/+8801776529824" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                </div>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='col-12 col-lg-7 w-50 mx-auto mt-5'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-outline">
                            <input style={{ backgroundColor: "#11365E" }} type="text" id="typeText" class="form-control border border-2 border-white py-3" />
                            <label class="form-label text-primary fw-bold mt-2" for="typeText">Your Full Name</label>
                        </div>
                        <div class="form-outline my-4">
                            <input style={{ backgroundColor: "#11365E" }} f type="email" id="typeEmail" class="form-control border border-2 border-white py-3" />
                            <label class="form-label text-primary fw-bold mt-2" for="typeEmail">Email input</label>
                        </div>
                        <div class="form-outline">
                            <textarea style={{ backgroundColor: "#11365E" }} class="form-control border border-2 border-white py-3" id="textAreaExample" rows="6"></textarea>
                            <label class="form-label text-primary fw-bold mt-2" for="textAreaExample">Message</label>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <input type="submit" value="Send" class="btn btn-primary w-50 fw-bold" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;