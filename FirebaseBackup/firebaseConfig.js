// Import necessary libraries
import admin, { initializeApp, credential as _credential } from 'firebase-admin';

// Load your Firebase service account credentials from the JSON file
import serviceAccount from './firebaseCredentials.json'; // Replace with the path to your JSON file

// Initialize Firebase with the credentials and your Firebase project URL
initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: 'https://marketplace-z.firebaseio.com', // Replace with your Firebase project URL
});

// Export the Firebase admin object for use in other parts of your backend code
export default admin;
