import { useReducer, useEffect } from 'react'
import axios from 'axios'


const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_PAGE: 'update_page'
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
        case ACTIONS.UPDATE_PAGE:
            return { ...state, nextPage: action.payload.nextPage }    
                
        default:
            return state
    }
}

export default function useFetchEmployee(params, page) {
   const [state, dispatch] = useReducer(reducer, {employee: [], loading: true })

   useEffect(() => { 
      const cancelToken1 = axios.CancelToken.source() 
      dispatch({ type: ACTIONS.MAKE_REQUEST })
      axios.get(BASE, {
          cancelToken1: cancelToken1.token,
          params: { markdown: true, page: page, ...params }
      }).then(res => {
          console.log(res)
          dispatch({ type: ACTIONS.GET_DATA, payload: {employee: res.data.results}})
      }).catch(e => {
          if (axios.isCancel(e)) return
          dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
      })

      const cancelToken2 = axios.CancelToken.source() 
      axios.get(BASE, {
        cancelToken2: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
        console.log(res)
        dispatch({ type: ACTIONS.UPDATE_PAGE, payload: {nextPage: res.data.results !== 0 }})
    }).catch(e => {
        if (axios.isCancel(e)) return
        dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
    })

      return () => {
          cancelToken1.cancel()
          cancelToken2.cancel()
      }
   }, [params, page])

   return state

}