export const convertToFormData = (obj: {[key: string]: any}) => {
	const formData = new FormData()

	for (const key in obj) {
		if (Array.isArray(obj[key])) {
			obj[key].map((item: any) => formData.append(`${key}[]`, item))
		} else {
			formData.append(key, obj[key])
		}
	}
	return formData
}
