import styled from 'styled-components';
import { motion } from 'framer-motion';
import './streggerStyel.css';
const Circle = styled(motion.div)`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 20px;

    background-color: ${(props) => (props ? props.color : '')};
`;

const style = {
    width: '30px',
    height: '30px',
    'border-radius': '50%',
    margin: '20px',
    'background-color': 'red',
};
const Container = styled(motion.div)`
    position:absolute;
    overflow:hidden;
    width: 75%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

const variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    show: {
        opacity: 1,
        x: -50,

        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
            x: { stiffness: 1000, velocity: -100 },
        },
    },
};

export default function streggerCircle() {
    return (
        <Container initial="hidden" animate="show" variants={variants}>
            <Circle drag variants={variants} color="#ea5455" />
            <Circle drag variants={variants} color="#f07b3f" />
            <Circle drag variants={variants} color="#ffd460" />
        </Container>
    );
}
