import './LikeContainer.css'
import { BsHeart, BsHeartFill } from 'react-icon/bs'

//como props, receba o usuário, a foto e uma função de atribuição
const LikeContainer = ({ photo, user, handlelike }) => {
  return (
    <div className='like'>
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            //Se o usuário já curtiu sua foto, mostra o coração cheio
            <BsHeartFill />
          ) : (
            //se o usuário ainda não curtiu a foto, mostra o coração vazio
            <BsHeart onClick={() => handlelike(photo)} />
          )}
          {/* contador dos likes */}
          <p>{photo.likes.length} like(s)</p>)
        </>
      )}
    </div>
  )
}

export default LikeContainer
