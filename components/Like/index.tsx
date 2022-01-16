import { useDispatch, useSelector } from 'react-redux';
import { setLike, setUnlike } from 'redux/likeSlice';

const Like = () => {
  const isLiked = useSelector((state: RootState) => state.like.value);
  const dispatch = useDispatch();

  const handleLike = () => dispatch(setLike());
  const handleUnlike = () => dispatch(setUnlike());

  return <div>{isLiked ? <div onClick={handleUnlike}>❤️</div> : <div onClick={handleLike}>❌</div>}</div>;
};

export default Like;
