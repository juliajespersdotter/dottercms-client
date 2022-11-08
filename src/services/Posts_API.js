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

const showPosts = () => {
	return get(`${BASE_URL}/posts`)
}

const showPost = id => {
	return get(`${BASE_URL}/${id}`)
}

const publishPost = async data => {
	await axios.post(`${BASE_URL}/publish`, data)
}

const updatePost = async (id, data) => {
	await axios.put(`${BASE_URL}/${id}`, data)
}

const deletePost = async id => {
	await axios.delete(`${BASE_URL}/${id}`)
}

const exports = {
	showPosts,
	showPost,
	publishPost,
	updatePost,
	deletePost,
}

export default exports
