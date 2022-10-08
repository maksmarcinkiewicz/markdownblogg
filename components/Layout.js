import React, {ReactNode} from 'react'
import {motion} from 'framer-motion'

const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
}

const Layout = ({children}) => (
    <div>

        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{type: 'linear'}}
            className="
                    flex flex-col items-start md:items-center w-full pt-10
                    px-4
                    h-full
                "
        >
            {children}
        </motion.main>
    </div>
)

export default Layout