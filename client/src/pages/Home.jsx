import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import NavigationBar from '../components/NavigationBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Home = () => {
  const services = [
  { title: "Web Development", desc: "Modern responsive websites." },
  { title: "Mobile Apps", desc: "Android & iOS apps with smooth UX." },
  { title: "UI/UX Design", desc: "Clean and user-friendly interfaces." },
  { title: "Systems", desc: "Custom software systems for businesses." },
  { title: "Graphic Design", desc: "Creative branding and visual designs." },
  { title: "Marketing", desc: "Digital marketing to grow your business." },
  { title: "Photography & Video", desc: "Professional media production." },
  { title: "Video & VFX", desc: "Cinematic editing and visual effects." }
];
  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <>
      <NavigationBar />

      {/* HERO */}
      <div className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>
            Build Your Future With <span>Softify_dev</span>
          </h1>
          <p>
            We create modern websites, mobile apps, and powerful software solutions
            to grow your business.
          </p>
          <div className="buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">View Projects</button>
          </div>
        </motion.div>
      </div>

      {/* SERVICES */}
      <motion.div 
  className="services"
  variants={sectionVariant}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <h2>Our Services</h2>

  <motion.div className="cards" variants={containerVariant}>
    {services.map((service, index) => (
      <motion.div 
        className="card" 
        variants={itemVariant}
        key={index}
        whileHover={{ scale: 1.06 }}
      >
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

      {/* PROJECTS */}
      <motion.div 
        className="projects"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>Our Projects</h2>

        <motion.div 
          className="project-grid"
          variants={containerVariant}
        >
          <motion.div className="project" variants={itemVariant}>Project 1</motion.div>
          <motion.div className="project" variants={itemVariant}>Project 2</motion.div>
          <motion.div className="project" variants={itemVariant}>Project 3</motion.div>
        </motion.div>
      </motion.div>
      <Footer/>
    </>
  )
}

export default Home