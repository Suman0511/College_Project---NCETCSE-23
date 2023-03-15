import logo1 from "../asserts/gitm.jpeg";
import logo2 from "../asserts/gu.jpeg";
import logo3 from "../asserts/g20.jpeg";
import logo4 from "../asserts/NCETLOGO.jpeg";
import "./destination.css";
import DestinationData from "./DestinationData";


const Destination = ()=>{
    return( 
     <div className="destination"> 
    <DestinationData 
    className="first-des"
    heading="ABOUT GLOBAL INSTITUTE OF TECHNOLOGY AND MANAGEMENT [GITM]"
    text="Global Institute of Technology and Management (GITM), Gurgaon is imparting technical education since 2008. The 
    college is undoubtedly, a preferred choice of budding engineers where every aspirant gets an equal opportunity to 
    think, wonder, visualize, explore experiment and design his/ her career as per interest and demands of the MNCs. Here, 
    we promote the growth for entrepreneurs, technocrats and engineers who contribute to the services of the society and 
    nation. We, at GITM, are absolutely committed to serve the society and improve the mode of life by imparting high 
    quality education. In the field of Engineering and Management catering to the explicit and implicit needs of the 
    students, society, humanity and Industry., our goal is to continuously improve the healthy learning environment and 
    facilities being provided to the students to achieve academic excellence for employability as world class Technocrats 
    and Managers, apart from making them noble human beings of a nation growing from strength to strength, dispelling 
    the darkness of ignorance and ameliorating the society by means of philanthropic endeavors. The college offers B.Tech 
    . in CSE, AI & DS, ECE, ME and Civil, BCA, BBA and Masters programmes in M.Tech in CSE, ECE & MBA."
    img1={logo1}
    />

<DestinationData 
className="first-des-reverse"
    heading="ABOUT GURUGRAM UNIVERSITY"
    text="Gurugram University is a synonym for excellence in education. The students from every nook and corner of the 
    country and from every group and stratum of society live, learn and play in the sprawling lush green; campus, nestled 
    at Sector-51, Gurugram. The University have faculty and other support and service staff, who cater various needs of 
    students and campus that facilitate learning and imbibe the best practices among students. Moreover the University 
    provides world class facilities, that constantly review and upgrade to reflect the latest trends and developments in 
    higher education."
    img1={logo2}
    />

<DestinationData 
    className="first-des"
    heading="ABOUT DEPARTMENT"
    text="The Computer Science and Engineering department caters to the everlasting demand of the market. The extensive and 
    laboratory facilities are one of the added advantages of the Department. The department is committed to provide 
    quality, cutting-edge educational experiences that give students a holistic view of the engineering education and 
    prepare them to take up their career in wide range of industries or establishing start-up companies. With this 
    conference, the department is enhancing the research activities among students/ faculty/ researchers and their 
    capabilities to explore emerging technologies in computer science and engineering. 
    "
    img1={logo3}
    /> 

<DestinationData 
className="first-des-reverse"
    heading="ABOUT CONFERENCE"
    text="The “National Conference on Emerging Technologies in Computer Science Engineering” (NCETCSE-23) aims to foster 
    collaboration and networking among researchers, students, and practitioners from various domains of computer science 
    engineering. The goal is to provide an opportunity for participants to exchange knowledge, experiences, and insights, and to 
    engage in stimulating discussions on the latest developments in the field.
    The conference features keynote speeches, technical paper presentations, poster sessions, and panel discussions, among other 
    activities. We invite submissions from researchers and practitioners working in academia, industry, and government, and we 
    encourage contributions from students and early-career professionals.
    NCETCSE is committed to promoting diversity, inclusivity, and equality in all aspects of our conference. We strive to create a 
    welcoming and respectful environment for all participants, regardless of their backgrounds, identities, or perspectives.
    We believe that the National Conference on Emerging Technologies in Computer Science Engineering plays a critical role in 
    advancing the state of the art in computer science engineering and promoting its impact on society. We look forward to 
    welcoming you to our conference and to the opportunity to collaborate, learn, and grow together."
    img1={logo4} 
    />
     </div>   
    );
};

export default Destination;