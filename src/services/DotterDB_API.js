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
	console.log(res.data)
	return res.data
}

const showPosts = () => {
	return get(`${BASE_URL}/posts`)
}

const publishPost = async data => {
	console.log(data)
	await axios.post(`${BASE_URL}/publish`, data)
}

const exports = {
	showPosts,
	publishPost,
}

export default exports
