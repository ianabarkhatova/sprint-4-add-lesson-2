import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

export const handleError = (error: unknown, dispatch: Dispatch) => {
  let errorMessage: string

  if (isAxiosError<ServerErrorType>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }
  dispatch(setAppErrorAC(errorMessage))
}


// types
export type ServerErrorType = {
  errorMessages: [
    {
      field: string
      message: string
    }
  ]
}


