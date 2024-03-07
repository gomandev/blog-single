import Footer from "./components/footer";
import Navbar from "./components/header";
import { BlogHero, BlogList, BlogContent } from "./components/SingleBlog";
import { posts } from "./data/posts";


export default function Blog() {
    return (
        <>
            <Navbar />
                <BlogHero />
                <BlogContent />
                <BlogList posts={posts} />
                {/* <SignupForms /> */}
                {/* <BlogFeatured />
                <BlogList posts={posts} />
                <SignupForms /> */}
            <Footer />
        </>
    )
}
