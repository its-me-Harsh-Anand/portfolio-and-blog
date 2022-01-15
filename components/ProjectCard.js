import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '@/styles/projectCard.module.css'
import {FaExternalLinkAlt} from 'react-icons/fa'

function projectCard({pname, purl, phomepage, pdescription, pdate}) {

    return (
        <div className={style.main}>
            <h3 className={style.date}>{pdate.slice(0, 10).replaceAll("-", " . ")}</h3>
            <h1 className={style.name}>{pname}</h1>
            <p className={style.description}>{pdescription || "Awesome project with no description"}</p>
            <div className={style.links}>
                <Link href={purl}>
                    <a href={purl} target="_blank">
                        Code <FaExternalLinkAlt />
                    </a>
                </Link>
                {
                    phomepage && <Link href={phomepage}>
                        <a target="_blank" href={phomepage}>
                            Website <FaExternalLinkAlt />
                        </a>
                        </Link>
                }
            </div>
        </div>
    )
}

export default projectCard
