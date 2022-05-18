import { createContext, useState, useEffect } from 'react'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	// fetch feedbacks
	const fetchFeedbacks = async () => {
		const res = await fetch(`/feedback?-sort=id&-order=desc`)
		const data = await res.json()
		setFeedback(data)
		setIsLoading(false)
	}

	// add feedback
	const addFeedback = async (newFeedback) => {
		const res = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})
		const data = await res.json()
		setFeedback([data, ...feedback])
	}

	//set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	// update feedback item
	const updateFeedback = async (id, updatedItem) => {
		const res = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		})
		const data = await res.json()
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
		)
	}

	// delete item function
	const deleteFeedback = async (id) => {
		if (window.confirm('are you sure ?')) {
			await fetch(`/feedback/${id}`, { method: 'DELETE' })
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
