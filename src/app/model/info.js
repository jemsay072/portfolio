import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";
import pic from "@/assets/images/jem.jpg";
import profile from "@/assets/images/profile-w.jpg";
import projuno from "@/assets/images/projUno.png";
import projdos from "@/assets/images/projDos.png";
import logoImg from "@/assets/images/logo-light.png";

const logo = {
    src: logoImg,
    alt: 'Jemson Sayre Logo',
    width: 145,
    height: 70
}

const Hero = {
    name: "Jemson A. Sayre",
    att: [
        'passionate',
        'creative',
        'dedicated'
    ],
    position: 'Web',
    description: 'I am a Web Developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills. I am always looking for new challenges and opportunities to grow.',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Git',
        'GitHub'
    ],  
}

const workData = [
    {
        title: 'Project Uno',
        desc: 'Built using Nextjs a modern react framework known for its speed and flexibility',
        img: projuno,
        link: 'https://projuno.jemsonsayre.com/',
        status: 'active',
        tech : [
            'NextJs',
            'Mui'
        ]

    },
    {
        title: 'Project Dos',
        desc: 'Built using Nextjs a modern react framework known for its speed and flexibility',
        img: projdos,
        link: 'https://projdos.jemsonsayre.com/',
        status: 'active',
        tech : [
            'NextJs',
            'Mui'
        ]
    },
    {
        title: 'Frontend project',
        desc: 'Web Design',
        img: profile,
        link: '',
        status: 'inprogress',
        tech : [ ]
    },
    {
        title: 'Frontend project',
        desc: 'web design',
        img: profile,
        link: '',
        status: 'inprogress',
        tech : [ ]
    }
]

// const projData = [
//     {
//         icon: '',
//         title: 'Web Design',
//         desc: '',
//         link: ''
//     }
// ]

const infoList = [
    {
        icon: <CodeXml />,
        title: 'Tech Skills',
        desc: 'HTML, CSS, JAVASCRIPT, REACT JS, LARAVEL, PHP, WORDPRESS, NEXT Js'
    },
    // {
    //     icon: <GraduationCap />,
    //     title: 'Education',
    //     desc: 'BS Computer Science'
    // },
    {
        icon: <BriefcaseBusiness />,
        title: 'Projects',
        desc: 'Built more than 5 projects using React JS and Next JS'
    },
]

// const toolsData = [
//     {
//         icons: ''
//     }
// ]

const combinedAbout = {
    desc: 'Experienced Web Developer with 12+ years of building high-performance, user-focused websites and applications. Skilled in HTML, CSS, JavaScript, ReactJS, PHP, Laravel, Wordpress and Next.js. Adept at delivering clean, efficient solutions, integrating APIs and databases, and ensuring top-tier UX, speed, and functionality.',
    src: pic,
    alt: 'jemson sayre',
    width: 200,
    height: 200,
    info: infoList, 
};

const info = {logo, Hero, workData, infoList, combinedAbout};
export default info;
