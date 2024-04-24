import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function index() {

  const router = useRouter();

  // Use the useEffect hook to perform the redirection
  useEffect(() => {
    // Redirect to the desired URL, e.g., '/HomePage'
    router.push('/HomePage');
  }, []); // The empty dependency array ensures this runs only once

  return <div>Redirecting...</div>; // You can display a loading message here
}