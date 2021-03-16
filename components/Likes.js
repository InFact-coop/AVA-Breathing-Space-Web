const Likes = ({ likes, className }) =>
  likes ? (
    <div
      className={`px-5 bg-lightestgray flex items-center font-bold font-med ${className}`}
    >
      <img src="/icons/heart-purple.svg" alt="Heart icon" className="mr-3" />
      <span>
        {likes} {likes === 1 ? 'person' : 'people'} found this useful
      </span>
    </div>
  ) : null

export default Likes
