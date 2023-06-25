class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	};
	fix() {
		alert(this.state * 1.5);
		return;
	};
	set state(number) {
		if (number < 0) {
			this._state = 0;
		}
		else if (number > 100) {
		    this._state = 100;
		}
		this._state = number;
	}
	get state() {
		return this._state;
	};
};
let book = new PrintEditionItem();

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
	constructor(name = "", books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (this.state > 30) {
			return this._books + 1;
		}
		this._books = book;
	}

   findBookBy(type, value){
	 if(this.books.length === 0){
		return null;
	}

	
	this._type = type;
	
   }

   giveBookByName(bookName){
		if(this._name = true){
			this.books.length - 1;
			return this._name;
		}
		if (this.books.length === 0){
			return null;
	    }
	   this._name = bookName;
}
}