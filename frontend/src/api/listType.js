import axios from '../axios'

export const getListTypes = () => axios.get('/list-type')