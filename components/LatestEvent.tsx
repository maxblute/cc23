import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

type Props = {
    setShow: any
}

const LatestEvent = ({ setShow }: Props) => {


    const handleClick = (e: any) => {
        e.preventDefault()

        setShow(true)
    }

    const latestImages = [
        '/images/ccdbi1.jpg',
        '/images/ccdbi2.jpg',
        '/images/ccdbi3.jpg'
    ]

    return (
        <div>

            <section className="grid xl:grid-cols-4 grid-cols-2 gap-4 container mx-auto min-h-[40vh] xl:h-96 h-48 relative xl:px-0 px-4">

                <AnimatePresence>
                    {latestImages.map((image, i) => (
                        <motion.div
                            initial={{
                                scale: 1.1,
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1, scale: 1
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeOut',
                                delay: 0.2 * i
                            }}
                            key={i}
                            className={`object-cover relative rounded overflow-hidden drop-shadow-sm ${i == 0 && 'col-span-2'}`}>
                            <Image
                                src={image}
                                alt='Latest Event'
                                fill
                                className='object-cover object-center'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                placeholder='blur' blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
                            />
                        </motion.div>

                    ))}
                </AnimatePresence>

                {/* RIBBON */}
                <span className='xl:text-xl text-sm absolute top-4 xl:-left-4 left-2 py-2 px-4 bg-mx-300 z-20 rounded font-bold shadow flex items-center gap-2'>Lastest Events <i className="ri-camera-2-fill"></i></span>

            </section>

            {/* CALL TO ACTION */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 1 }}
                className="flex md:flex-row flex-col flex-wrap xl:gap-6 md:gap-4 gap-2 container items-center mx-auto xl:py-16 py-8 text-white xl:px-0 px-4 justify-center">
                <Link href='/cookout23' className="flex gap-2 items-center">
                    <i className="ri-play-fill text-2xl text-mx-400"></i>
                    <h1 className='xl:text-2xl font-semibold'>Cayman Cookout 2023</h1>
                </Link>
                <div className='flex-1 border-b-[1px] border-mx-400 border-opacity-10 hidden xl:block' />
                <button onClick={handleClick} className='btn2 md:mb-0 mb-8'>View Photos <i className="ri-arrow-right-line" /></button>
            </motion.section>

        </div >
    )
}

export default LatestEvent