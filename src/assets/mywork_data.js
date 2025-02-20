import project1_img from '../assets/project_1.jpg';
import project2_img from '../assets/project_2.jpg';
import project3_img from '../assets/project_3.jpg';
import project4_img from '../assets/project_4.jpg';
import project5_img from '../assets/project_5.jpg';
import project6_img from '../assets/project_6.jpg';

const mywork_data = [
    {
        w_no: 1,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project1_img,  // ✅ Corrected path
        w_desc: "A user-friendly site for browsing menus, placing orders, and tracking them in real time. Secure checkout and smooth UI with MERN.",
        live_demo: "https://tomato-food-delapp-react.web.app/",
        github: "https://github.com/Jijojacob988/Tomatoo",
    },
    {
        w_no: 2,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project2_img,
        w_desc: "A real-time crypto market tracker with portfolio management, price alerts, and historical data. Fast and user-friendly with MERN stack.",
        live_demo: "https://aesthetic-mousse-2eec31.netlify.app/",
        github: "https://github.com/Jijojacob988/Cryptoplace---Crypto-price-tracker",
    },
    {
        w_no: 3,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project3_img,
        w_desc: "A video streaming app with a vast library, personalized recommendations, and secure subscriptions. MERN-powered for seamless viewing.",
        live_demo: "https://funny-monstera-176f90.netlify.app/",
        github: "https://github.com/Jijojacob988/Netflixx-clone",
    },
    {
        w_no: 4,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project4_img,
        w_desc: "A modern shopping platform with secure checkout, order tracking, and an intuitive admin panel. MERN ensures a seamless experience.",
        live_demo: "https://trendify-e-commerce.web.app/",
        github: "https://github.com/Jijojacob988/Trendify-E-Commerce-Backend",
    },
    {
        w_no: 5,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project5_img,
        w_desc: "A sleek platform for streaming high-quality music with playlists, offline downloads, and real-time lyrics. Built with MERN for smooth performance.",
        live_demo: "https://music-stream-app-fe.onrender.com/",
        github: "https://github.com/Jijojacob988/music-stream-app",
    },
    {
        w_no: 6,
        w_name: "Web design",
        w_img: import.meta.env.BASE_URL + project6_img,
        w_desc: "A travel booking site with interactive maps, user reviews, and secure payments. Built with MERN for fast and engaging navigation.",
        live_demo: "https://jijojacob988.github.io/Green-Earth/",
        github: "https://github.com/Jijojacob988/Green-Earth",
    },
];

export default mywork_data;
