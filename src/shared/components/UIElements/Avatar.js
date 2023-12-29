import './Avatar.css';

function Avatar({ className, style, image, alt, width, height }) {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
}

export default Avatar;
