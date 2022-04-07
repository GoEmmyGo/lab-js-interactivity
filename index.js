console.log('hello world')

const message = document.querySelector('#message')

const addMovie = (event) => {

    event.preventDefault()

    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')


    movieTitle.textContent = inputField.value
    deleteBtn.textContent = ('X')
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(deleteBtn)
    movie.appendChild(movieTitle)

    document.querySelector('ul').appendChild(movie)

    deleteBtn.addEventListener('click', deleteMovie)

    inputField.value = ''
}

const deleteMovie = (event) => {

    event.target.parentNode.remove()
    message.textContent = ('Movie Deleted')

    revealMessage()
}

document.querySelector('form').addEventListener('submit', addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    result =  event.target.classList.contains('checked') 
    ? message.textContent = 'Movie Watched' 
    : message.textContent = 'Movie Added Back'

    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}


// console.log(addMovie())

//addMovie()