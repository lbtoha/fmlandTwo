import comments from "../../../../public/data/comments";
import CommentCard from "./CommentCard";

const BlogDetailsComments = () => {
  return (
    <div className="comment-area">
      <h4 className="mb-30">Comments:</h4>
      <div className="comment-list">
        {comments.map(({ id, ...props }, index) => (
          <CommentCard key={id} commentNumber={index + 1} {...props} />
        ))}
        {/*  single-comment end  */}
      </div>
    </div>
    // comment-area end
  );
};

export default BlogDetailsComments;
