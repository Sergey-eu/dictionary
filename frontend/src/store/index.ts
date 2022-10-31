import { action, autorun, makeAutoObservable, runInAction } from 'mobx';
import { extractWordData } from '../helpers/extractWordData';
import { Word, RequestStatus } from '../types';

class DictionaryStore {
  history: Word[] = [];
  favorites: string[] = [];
  status: RequestStatus = RequestStatus.Pending;

  constructor () {
    makeAutoObservable(this);

    const name = 'dictionary';
    const storedJson = localStorage.getItem(name);

    if (storedJson) Object.assign(this, JSON.parse(storedJson));

    autorun(() =>  localStorage.setItem(name, JSON.stringify(this)));
  }

  @action
  getWord = async (word: string) => {
    // check info in the history and move to top
    if (this.history.some( item => item.word === word.toLowerCase())) {
      this.history.sort( (a, b) => a.word === word ? -1 : b.word === word ? 1 : 0);
      return;
    }
    // get info from the API
    try {
      this.status = RequestStatus.Loading;
      const response = await fetch(`${process.env.REACT_APP_DICTIONARY_API_URL}/entries/en/${word}`);
      const result = await response.json();

      if (!response.ok) {
        runInAction(() => this.status = RequestStatus.Error);
        throw new Error(`word '${word}' - ${result.title}`);
      }

      runInAction(() => {
        this.status = RequestStatus.Success;
        this.history.unshift(extractWordData(result[0]));
      });
    } catch (error) { console.error(error); }
  };

  @action
  getFavorites = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/favourites`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(`Favorites requesting error: ${result.title}`);
      }
      runInAction(() =>  this.favorites = result );
    } catch (error) { console.error(error); }
  };

  @action
  updateFavorites = async (word: string) => {
    const method = this.favorites.includes(word) ? 'DELETE' : 'POST';
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/favourites`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'word': word})
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(`Favorites requesting error: ${result.title}`);
      }
      runInAction(() => this.favorites = result );
    } catch (error) { console.error(error); }
  };

  @action
  updateStatus = (status: RequestStatus) => {
    runInAction(() => this.status = status);
  };
}

export default new DictionaryStore();
