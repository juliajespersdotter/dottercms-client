import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

/**
 * GET an endpoint
 *
 * @param {string} endpoint
 * @returns Promise
 */
const get = async (endpoint, options) => {
	const res = await axios.get(endpoint, options)
	return res.data
}

const login = async data => {
	const res = await axios.post(`${BASE_URL}/login`, data)
	console.log(res.data)
	return res.data
}

const register = async data => {
	await axios.post(`${BASE_URL}/register`, data)
}

const refresh = id => {
	return get(`${BASE_URL}/${id}`)
}

const exports = {
	login,
	register,
	refresh,
}

export default exports
