import { auth, app } from '../utils/firebase';

const useAuthClaims = () => {
 auth.onAuthStateChanged((user) => {
    user
      .getIdTokenResult()
      .then((idTokenResult) => {
        return idTokenResult.claims.admin;
      })
      .catch((error) => {
        return error.message;
      });
  });

};

export default useAuthClaims;
