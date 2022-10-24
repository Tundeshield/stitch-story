import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

const getData = (collection) => {
  const colRef = collection(db, collection);
  onSnapshot(colRef, (snapshot) => {
    const data = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  
  });
};
