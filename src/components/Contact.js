import { Button } from 'bootstrap';
import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='container py-5'>
            <div className='text-center text-white mb-5'>
                <h4>Get In Touch</h4>
                <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Contact Me</h2>

            </div>
            <div className='row'>
                <div className='col-5'>

                </div>
                <div className='col-7 w-50'>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Full Name' />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control bg-transparent" id="exampleInputPassword1" placeholder='Your Email' />
                        </div>
                        <div class="mb-3">
                            <textarea rows={5} type="" class="form-control bg-transparent" id="exampleInputPassword1" placeholder='Your Message'></textarea>
                        </div>
                        <div class="mb-3 form-check d-flex justify-content-center text-white">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" class="btn btn-primary w-50">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;