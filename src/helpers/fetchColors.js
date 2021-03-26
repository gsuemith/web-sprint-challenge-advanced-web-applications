import { axiosWithAuth } from "./axiosWithAuth"
import axios from 'axios'


export const fetchColors = () => {
  return axiosWithAuth()
  .get('http://localhost:5000/api/colors')
  .then(res => {
    return res
  })
  .catch(err => {
    console.log("Error fetching colors", err)
    return err
  })
}

// export const fetchColors = () => {
//   return axios.create({
//     headers: {
//       Authorization: 'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98'
//     }
//   })
//   .get('http://localhost:5000/api/colors')
//   .then(res => {
//     return res
//   })
//   .catch(err => {
//     console.log("Error fetching colors", err)
//   })
// }