import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { useAppSelector } from '../../app/store.ts'
import { selectAppStatus } from '../../app/app-selectors.ts'
import { isAxiosError } from 'axios'
import { handleError, ServerErrorType } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatusAC('succeeded'))
  } catch (error) {
    dispatch(setAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    // throw new Error("Error")
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (error) {
    handleError(error, dispatch)
  }
}




