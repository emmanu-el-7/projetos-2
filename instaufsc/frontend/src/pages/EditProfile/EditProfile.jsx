import './EditProfile.css'

const EditProfile = () => {
  return (
    <div id='edit-profile'>
      <h2>Edite seus dados</h2>
      <p className='subtitle'>
        Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      {/* preview da imagem */}
      <form>
        <input type='text' placeholder='Nome' />
        {/* o input do e-mail é apenas para visualização, pois o e-mail não pode ser alterado */}
        <input type='email' placeholder='E-mail' disabled />
        <label>
          <span>Imagem do Perfil:</span>
          <input type='file' />
        </label>
        <label>
          <span>Bio:</span>
          <input type='text' placeholder='Descrição do perfil' />
        </label>
        <label>
          <span>Deseja alterar sua senha?</span>
          <input type='password' placeholder='Digite sua nova senha' />
        </label>
        <input type='submit' value='Atualizar' />
      </form>
    </div>
  )
}

export default EditProfile
