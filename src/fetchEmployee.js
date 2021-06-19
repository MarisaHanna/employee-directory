import { useReducer, useEffect } from 'react'
import axios from 'axios'


const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE = 'https://randomuser.me/api/?results=50&nat=us'

function reducer(state, action) {
     switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return{ loading: true, employee: [] }
        case ACTIONS.GET_DATA:
             return{ ...state, loading: false, employee: action.payload.employee} 
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, employee: [] }
                
        default:
            return state
    }
}

export default function useFetchEmployee(params, page) {
   const [state, dispatch] = useReducer(reducer, {employee: [], loading: true })

   useEffect(() => { 
      const cancelToken = axios.CancelToken.source() 
      dispatch({ type: ACTIONS.MAKE_REQUEST })
      axios.get(BASE, {
          cancelToken: cancelToken.token,
          params: { markdown: true, page: page, ...params }
      }).then(res => {
          console.log(res)
          dispatch({ type: ACTIONS.GET_DATA, payload: {employee: res.data.results}})
      }).catch(e => {
          if (axios.isCancel(e)) return
          dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
      })

      return () => {
          cancelToken.cancel()
      }
   }, [params, page])

   return state

}