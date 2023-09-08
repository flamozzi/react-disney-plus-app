import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '066c55c8bb2b9ff8070d9ce4ffa31eba',
    language: 'ko-KR',
  },
})

export default instance
