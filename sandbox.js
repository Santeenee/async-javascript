// returns a promise
const getTodos = async todo => {
	//
	const response = await fetch(todo)
	const data = await response.json()

	return data
}

console.log(1)
console.log(2)

// non blocking code :>)
getTodos('todos/luigi.json').then(data => console.log('resolved:', data))

console.log(3)
console.log(4)
