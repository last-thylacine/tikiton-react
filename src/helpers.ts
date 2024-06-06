const FIVE_MINUTES = 5 * 60 * 1000 // ms

export const createTransaction = (address: string, amount: string, ttl: number = FIVE_MINUTES) => {
	const now = Date.now()
	const validUntil = now + ttl
	const transaction = {
		validUntil, // time for user to approve
		messages: [{
			address, // destination address
			amount, // nanotons
		}],
	}
	return transaction
}
