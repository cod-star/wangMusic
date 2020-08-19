import {request} from './request'



export function getIndexdata(sort,format){
  return request({
    url:'/rand.music',
    params: {
      sort,
      format
    }
  })
}