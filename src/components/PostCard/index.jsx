import Type from 'prop-types';
import './styles.css';

export const PostCard = ({ post }) => {
  return (
    <>
      <div className="post">
        <img src={post.cover} alt={post.title} />
        <div className="post-content">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: Type.string.isRequired,
};
