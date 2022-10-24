import Button from '../components/Button';
import { useHttpsCallable } from 'react-firebase-hooks/functions';
import { getFunctions } from 'firebase/functions';

// const [executeCallable, executing] = useHttpsCallable(
//   getFunctions(),
//   'whatever the function is',
// );
// <Button
//   type="submit"
//   fullWidth
//   variant="contained"
//   sx={{ mt: 3, mb: 2 }}
//   onClick={async () => {
//     await executeCallable({ email: 'tundeshield@gmail.com' });
//   }}
// >
//   Make admin
// </Button>;
