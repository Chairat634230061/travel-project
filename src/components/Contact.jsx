import { useState, useRef } from "react";
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { contactBG } from '../assets/';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // iuAwjuLP5Nb9nWqdh
    // template_nkxawrk
    // service_u8jngbn

    emailjs.send(
      'service_u8jngbn',
      'template_nkxawrk',
      {
        from_name: form.name,
        to_name: 'Chairat',
        from_email: form.email,
        to_email: '634230061@webmail.npru.ac.th',
        message: form.message,
      },
      'iuAwjuLP5Nb9nWqdh'
       )
       .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
       }, 
       (error) => {
        setLoading(false)

        console.error(error);

        alert('Something went wrong.')
       })
  }


  return (
    <section className="h-screen bg-[#181818] overflow-y-auto scrollbar-none scroll-snap-align-center py-10 px-4 sm:px-20">
      <h3 className={`${styles.sectionHeadText} justify-center px-4 sm:px-20`}>Contact</h3>
      <div className="xl:flex-row flex-col-reverse flex px-4 sm:px-20">
        <form 
        ref={formRef} 
        onSubmit={handSubmit} 
        className="flex flex-col gap-5 w-full sm:w-1/2">
          <label className="flex flex-col">
            <samp className="text-white font-medium mb-4 w-full">Your Name</samp>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <samp className="text-white font-medium mb-4">Your Email</samp>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <samp className="text-white font-medium mb-4">Your Message</samp>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#6633cc74] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        
        <div className="relative w-full sm:w-1/1">
        <img src={contactBG} alt="contact" className='contactBG' />
          <Canvas className='contactCanvas' style={{ width: '100%', height: '600px' }}>
            <ambientLight intensity={3} />
            <directionalLight position={[3, 2, 1]} />
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#6667AB"
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
         
        </div>
      </div>
    </section>
  );
}

export default Contact;
