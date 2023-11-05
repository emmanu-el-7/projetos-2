import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from '../services/userService'

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null
}

//Recuperar os detalhes do usuário logado
export const profile = createAsyncThunk(
  'user/profile',
  async (user, thunkAPI) => {
    //pegamos o token salvo em authSlice.jsx para utilizá-lo aqui
    const token = thunkAPI.getState().auth.user.token

    const data = await userService.profile(user, token)

    return data
  }
)

//atualizr perfil de usuário
export const updateProfile = createAsyncThunk(
  'user/update',
  async (user, thunkAPI) => {
    //pegamos o token salvo em authSlice.jsx para utilizá-lo aqui
    const token = thunkAPI.getState().auth.user.token

    const data = await userService.updateProfile(user, token)

    //verificação de erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetMessage: state => {
      state.message = null
    }
  },
  extraReducers: builder => {
    //vão trabalhar diretamente com o estado atual de cada requisição
    //o builder irá construir pra gente os dversos casso possíveis de cada requisição
    builder
      .addCase(profile.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(profile.fulfilled, (state, action) => {
        //action é o data que vem da requisição
        state.loading = false
        state.success = true
        state.error = null
        state.user = action.payload //profile funcionou, então passa o usuário
      })
      .addCase(updateProfile.pending, state => {
        state.loading = true
        state.loading = false
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.user = action.payload
        state.message = 'Usuário atualizado com sucesso!'
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.user = {}
      })
  }
})

export const { resetMessage } = userSlice.actions
export default userSlice.reducer
