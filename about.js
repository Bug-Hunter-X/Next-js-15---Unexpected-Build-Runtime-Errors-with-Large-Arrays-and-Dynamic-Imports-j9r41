```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // If you use a large number of dynamic imports, it may lead to issues
  // with webpack 5's code splitting mechanisms.
  // These errors may not always be immediately obvious but only manifest
  // during build or runtime.
  const largeArray = Array(100000).fill(0);
  console.log(largeArray);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```