export const convertToFormData = (obj: {[key: string]: any}) => {
	const formData = new FormData()

	for (const key in obj) {
		const value = obj[key]
		formData.append(key, value)
	}

	return formData
}
