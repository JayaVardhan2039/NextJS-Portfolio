import Link from "next/link";
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa';
const socials=[
    { icon: <FaGithub/>,path:"https://github.com/JayaVardhan2039"},
    { icon: <FaLinkedin/>,path:"https://www.linkedin.com/in/jaya-vardhan-govvada-3b5499256/"},
    { icon: <FaInstagram/>,path:"https://www.instagram.com/jayavardhan.jv/"},
];
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
            <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social