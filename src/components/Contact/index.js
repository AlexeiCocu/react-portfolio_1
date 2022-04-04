import React, {useEffect, useRef, useState} from 'react';
import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const refForm = useRef();

    const textDelay = () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }

    useEffect(() => {
        textDelay();
    }, [])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pv8cuoq', 'template_z81wlr3', refForm.current, '4b-5Ziu9FznRcTQt-')
            .then(() => {
                alert('Message was send!')
                window.location.reload(false)
            },
                () => {
                alert('Failed to send the message, please try again')
                }

            )

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>

                <div className='info-map'>
                    Alexei Cocu,
                    <br/>
                    Italy,
                    Bassano del Grappa <br/> <br/>
                    <a className='mail_link' href="mailto:alexei.cocu@gmail.com"><span>alexei.cocu@gmail.com</span></a>
                </div>


                <div className='map-wrap'>
                    <MapContainer center={[45.7657, 11.7273]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[45.7657, 11.7273]}>
                            <Popup>
                                Alexei Cocu. <br /> <a href="tel:+393517285241">+39 351 728 5241.</a>
                            </Popup>
                        </Marker>
                    </MapContainer>

                </div>
            </div>
            <Loader type='pacman' active />
        </>
    );
};

export default Contact;