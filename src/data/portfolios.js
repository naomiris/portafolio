import css1 from '../img/DogsApp.jpg'
import css2 from '../img/HenryNetwork.jpg'
const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: css1,
        link1: 'https://github.com/naomiris/Proyect-Dogs',
        link2: 'https://www.linkedin.com/in/naomi-del-castillo/',
        link3: 'https://proyect-dogs.vercel.app/',
        title: 'Doggy APP',
        text: 'Created with ReactJs, Redux and pure Css in the Front End. Express, PosgreSQl and Sequelize in the Back End using the Dogs API'
    },
    {
        id: 2,
        category: 'JavasCript', 
        image: css2,
        link1: 'https://github.com/naomiris/socialNetwork',
        link2: 'https://www.linkedin.com/in/naomi-del-castillo/',
        link3: 'https://henry-network.vercel.app/',
        title: 'Henry Network',
        text: "Created with ReactJs, Redux, Firebase, Socket-io, Styled-Components in the Front End. MongoDB, Node mailer, Express, JSON Web Token, and Multer in the Back End."
    },
    
]

export default portfolios;