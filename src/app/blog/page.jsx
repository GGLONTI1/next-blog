import CardList from "@/components/cardList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/Menu/Menu"



const BlogPage = async ({ searchParams }) => {

    const page = parseInt(searchParams.page) || 1
    const cat = searchParams.cat



    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage