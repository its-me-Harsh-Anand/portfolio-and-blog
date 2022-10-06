import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '@/styles/projectCard.module.css'
import {FaExternalLinkAlt} from 'react-icons/fa'

function projectCard({pname, purl, phomepage, pdescription, pdate}) {

    return (
        <div className={style.main}>
            <h1 className={style.name}>{pname}</h1>
            <h3 className={style.date}>{pdate.slice(0, 10).replaceAll("-", " . ")}</h3>
            <p className={style.description}>{pdescription || "Awesome project with no description"}</p>
            <div className={style.wrapper}>
                <div className={style.links}>
                    <Link href={purl}>
                        <a href={purl} target="_blank" rel="noreferrer">
                            Code <FaExternalLinkAlt />
                        </a>
                    </Link>
                    {
                        phomepage && <Link href={phomepage}>
                            <a target="_blank" href={phomepage} rel="noreferrer">
                                Website <FaExternalLinkAlt />
                            </a>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default projectCard
