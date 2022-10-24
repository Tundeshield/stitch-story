const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      console.log(user.email, 'is actually correct and in the db');
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

// export async function grantModRole(email) {
//   const user = await admin.auth().getUserByEmail(email);
//   if (user.customClaims && user.customClaims.moderator === true) {
//     return;
//   }
//   return admin.auth().setCustomUserClaims(user.uid, {
//     productionManager: true,
//   });
// }
