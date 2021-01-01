import { useState } from 'react';
import './slider.scss';
import User from './data/data';
import { motion, AnimatePresence, transform } from 'framer-motion';
import { wrap } from 'popmotion';

const num = 400;
const imageVariants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? num : -1 * num,
        };
    },
    center: {
        x: 0,
        transition: { duration: 2, ease: 'easeInOut' },
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? num : -1 * num,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        };
    },
};

const TextVariants = {

    enter: {
         opacity:1   
    },
    exit: {
        opacity:0
    }
};

// const warp = (i, len)=>{
//     if (i< 0) {
//         console.log({i,len});
//         return Math.abs(i+len)%len
//     }
//     return i%len
// }

export default function Slider() {
    const [[page, direction], setState] = useState([0, 0]);

    var userIndex = wrap(0, User.length, page); // same as the warp in popmotion library
    console.log({ page, userIndex });

    const paginate = (newDirction) => {
        setState([page + newDirction, newDirction]);
    };
    return (
        <div className="section">
            <div className="inner">
                <div className="arrow-left">
                    <img
                        onClick={() => paginate(-1)}
                        src="https://img.icons8.com/fluent-systems-filled/24/000000/long-arrow-right.png"
                        alt="left-arrow"
                    />
                </div>
                <div onClick={() => paginate(1)} className="arrow-right">
                    <img
                        src="https://img.icons8.com/fluent-systems-filled/24/000000/long-arrow-right.png"
                        alt="right-arrow"
                    />
                </div>

                <div className="image-Container">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            src={User[userIndex].img}
                            alt="user"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            key={page}
                            custom={direction}
                            variants={imageVariants}
                        />
                    </AnimatePresence>
                </div>
                <div className="text-Container">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={TextVariants}
                            initial="enter"
                            exit="exit"
                        >
                            <motion.p className="quote" key={page}>
                                {User[userIndex].quote}
                            </motion.p>
                            <motion.h3 className="name" key={page}>
                                {User[userIndex].name}
                            </motion.h3>
                            <motion.h4 className="title" key={page}>
                                {User[userIndex].title}
                            </motion.h4>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
