// pages/SignupPage.jsx
import SignupForm from '../components/SignupForm';
import { signup } from '../services/api';

export default function SignupPage() {
  const handleSignup = async (userData) => {
    const data = await signup(userData);
    console.log('Signup Response:', data);
  };

  return <SignupForm onSubmit={handleSignup} />;
}
