// import { FacebookSignInButton, GoogleSignInButton,GithubSignInButton } from "@/src/app/components/authButtons";
// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center m-4">
//       <h1 className="text-4xl my-3">Next Auth</h1>

//       <GoogleSignInButton />
//       <GithubSignInButton />
//       <FacebookSignInButton />
//     </div>
//   )
// }
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const [pages, setPages] = useState([]);

  const handleFacebookLogin = async () => {
    try {
      // เรียก API route ที่เราสร้างขึ้น
      const response = await axios.get('/api/facebook');

      // ตัวอย่างเฉพาะการใช้งาน เซ็ต state หรือทำการประมวลผลต่อไป
      setPages(response.data);
    } catch (error) {
      console.error('Error fetching Facebook data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>{page.name}</li>
        ))}
      </ul>
    </div>
  );
}
