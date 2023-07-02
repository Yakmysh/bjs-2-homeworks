class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		return this.state *= 1.5;
	}
	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
		    this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = "book";
		this.author = author;
	}
};
let nameBook = new Book();

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
};
let book1 = new NovelBook();

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
};
let book2 = new FantasticBook();

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
};
let book3 = new DetectiveBook();

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
	}

	findBookBy(type, value){
        let result = this.books.find(book => book[type] === value);
        return result || null;
      }

	giveBookByName(bookName) {
		let searchName = this.books.find(book => book.name === bookName);
		if (searchName === undefined) {
			return null;
		} else {
			this.books = this.books.filter(book => book.name !== bookName);
			return searchName;
		}
	}
    
}