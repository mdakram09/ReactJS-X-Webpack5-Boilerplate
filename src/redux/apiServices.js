/* eslint-disable import/prefer-default-export */
// apiService.js
import axios from "axios";

export const fetchData = async (endpoint, formData) => {
	// eslint-disable-next-line no-useless-catch
	try {
		const response = await axios.post(endpoint, formData);
		return response.data;
	} catch (error) {
		throw error;
	}
};
