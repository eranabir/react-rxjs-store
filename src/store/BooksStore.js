import {BehaviorSubject} from 'rxjs';
import axios from 'axios';

class BooksStore {

    books = new BehaviorSubject([]);
    getBooks= async() => {

        try{

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');

            this.books.next(response.data);

            return true
        }
        catch (e) {
            throw e
        }

    };

}

export default new BooksStore();



