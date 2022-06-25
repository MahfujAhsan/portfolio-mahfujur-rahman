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
                <h4 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }}>Get In Touch</h4>
                <h2 className="fs-2">Contact Me</h2>

            </div>
            <div className='row g-5'>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='col-12 col-lg-5 mx-auto'>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3'>
                        <FontAwesomeIcon className='text-danger' icon={faEnvelopeOpen} size="2x" />
                        <h2 className='fs-4'>Email</h2>
                        <p>mahfujur.rahman1@outlook.com</p>
                        <a className='text-decoration-none text-white font-monospace fw-bold border border-1 px-3 py-1 rounded-3 border-danger' rel='nooppener noreferrer' href="mailto:mahfujur.rahman1@outlook.com" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3 my-3'>
                        <FontAwesomeIcon style={{color: '#1A6ED8'}} icon={faFacebookMessenger} size="2x" />
                        <h2 className='fs-4'>Facebook Messenger</h2>
                        <p>@AhsaanMahfuj</p>
                        <a style={{border: "2px solid #1A6ED8"}} className='text-decoration-none text-white font-monospace fw-bold px-3 py-1 rounded-3' rel='nooppener noreferrer' href="https://m.me/AhsaanMahfuj" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                    <div className=' border border-2 border-white text-white text-center py-3 rounded-3'>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#2BD348' }} />
                        <h2 className='fs-4'>WhatsApp</h2>
                        <p>(+880) 1776529824</p>
                        <a style={{border: '2px solid #2BD348'}} className='text-decoration-none text-white fw-bold font-monospace px-3 py-1 rounded-3' rel='nooppener noreferrer' href="https://wa.me/+8801776529824" target="_blank"><FontAwesomeIcon icon={faArrowRight} bounce /> Send a Text</a>
                    </div>
                </div>
                <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='col-12 col-lg-5 mx-auto mt-5'>
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