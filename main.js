import { books } from './data.js';

// if (typeof document !== 'undefined') {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => getRandBook())
//  }

const getRandBook = () => {

    const getRandNum = () => {
        const num = Math.ceil(Math.random()*(books.length-1))
        return num
    }

    const randBook = getRandNum()
    // const num = Math.ceil(Math.random()*(books.length-1))
    
    const getRandTitle = () => {
        let title = document.getElementById('book-title')
        title.innerHTML = books[randBook].title
    }
    
    const getRandAuthor = () => {
        let author = document.getElementById('book-author')
        author.innerHTML = books[randBook].author
    }
    
    const getRandDesc = () => {
        let description = document.getElementById('book-description')
        description.innerHTML = books[randBook].description
    }
    
    const getRandRating = () => {
        let rating = document.getElementById('book-rating')
        rating.innerHTML = books[randBook].rating
    }

    const getRandCover = () => {
        let cover = document.getElementById('book-cover')
        cover.src = books[randBook].cover
    }

    const makeBookVisible = () => {
        const bookInfo = document.getElementById
        ('book-info')
        bookInfo.style.visibility = 'visible'
    }
    
    getRandNum()
    getRandTitle()
    getRandAuthor()
    getRandDesc()
    getRandRating()
    makeBookVisible()
    getRandCover()
}


