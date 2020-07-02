import axios from 'axios';

const baseUrl = "http://localhost:60671/api/"


// http://localhost:60671/api/DCandidate

export default {

  dCandidate(url = baseUrl + 'dcandidate/') {
      return {
          fetchAll: () => axios.get(url),
          fetchById: id => axios.get(url + id),
          create: newRecord =>{
          debugger
            axios.post(url, newRecord)
          },
          update: (id, updateRecord) => axios.put(url + id, updateRecord),
          delete: id => axios.delete(url + id)
      }
  }
}



// export default axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// });