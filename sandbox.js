const getTodos = async todo => {
	//
	const response = await fetch(todo)

	if (!response.ok) {
		throw new Error('cannot fetch the data ＞︿＜')
	}

	const data = await response.json()

	return data
}

//change the path to something incorrect like
// 'wrong/path'
//to see (and perhaps understand) the process of catching errors
getTodos('todos/luigi.json')
	.then(data => console.log('resolved:', data))
	.catch(err => console.log('rejected:', err.message))
