import { FaRegHeart } from "react-icons/fa";

function Card(props) {

  const {
    artistName,
    artistcategory,
    albumName,
    albumYear,
    genre,
    albumImage
  } = props;


  return (
    <>
      <div className='card'>
        <img src={albumImage} alt="album-img" className='card__img' />
        <div className='container-info'>
          <div className='card__artist'>
            <p className='artist-name'>{artistName}</p>
            <p className='artist-category'>{artistcategory}</p>
          </div>
          <div className='card__album'>
            <p className='album-name'>{albumName}</p>
            <p className='album-year'>({albumYear})</p>
          </div>
          <div className='card_genre'>
            <div className='genre'>{genre}</div>
            <p className='like-icon'>
              <FaRegHeart />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;