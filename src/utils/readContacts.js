import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const contactStr = await fs.readFile(PATH_DB, 'utf-8');
  return contactStr ? JSON.parse(contactStr) : [];
};
