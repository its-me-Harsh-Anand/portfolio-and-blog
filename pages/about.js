import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/about.module.css'
function About() {
    return (
        <Layout 
        title="About Harsh" 
        keywords="about, harsh, blog, anand"
        >
            <div className={styles.aboutMeDivs}>
            <h3 className={styles.heading}>About me</h3>
            <Image className={styles.profileImage} src='/images/profile.jpeg' height={600} width={400}/>
            </div>


            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Bio
                </h3>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nemo minima blanditiis, natus quos animi deleniti quo, aperiam laboriosam quae, soluta harum aliquid magni amet voluptatibus in provident dolores beatae possimus architecto neque voluptatum! Minus, asperiores reiciendis adipisci quibusdam, molestiae ipsum molestias laudantium officia corrupti quod maiores nesciunt, mollitia fugit doloremque. Suscipit eos nesciunt cupiditate qui ipsam consequuntur porro laudantium modi quae corporis, vitae magnam vel voluptatum tenetur reiciendis deserunt eum aut sequi, ducimus animi voluptatibus non magni culpa harum? Aperiam, repellat dignissimos autem est animi inventore, corporis repudiandae illo molestiae natus molestias ipsa atque quis maxime. Explicabo, maxime earum?
                </div>
            </div>
            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Education
                </h3>
                <div>
                    B.Tech in ECE
                </div>
            </div>
            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Known Tech Stacks
                </h3>
                <div>
                    images of html css js etc you are familiar with
                </div>
            </div>
            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Work Experience
                </h3>
                <div>
                    hackslash, robotics, GWOC etc
                </div>
            </div>
            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Skills
                </h3>
                <div>
                    mention skills
                </div>
            </div>
            <div className={styles.aboutMeDivs}>
                <h3 className={styles.heading}>
                    Contact
                </h3>
                <div>
                    images with links of social media
                </div>
            </div>
        </Layout>
    )
}

export default About
