import noteTemplate from '../../templates/note.hbs';
import {refs} from '../utils/constants';
import initialNotes from '../../assets/notes.json';

export const createNote = note => noteTemplate(note);

export const createNotes = note => note.map(note => noteTemplate(note)).join('');

refs.noteList.insertAdjacentHTML('beforeend', createNotes(initialNotes));