import blogData from "../../../../public/data/blogData";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    //  <!-- blog section start -->
    <section className="pt-120 pb-120 multi-section-bg">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {blogData.slice(0, 9).map(({ id, ...props }) => (
            <BlogCard key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
    //   <!-- blog section end -->
  );
};

export default Blog;
