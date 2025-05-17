# 💻 Code Connect

This repository was created for learning through Alura NextJS Course
I am gonna document my learns in this repositories while i am doing the course.

## App Router

Since version 13, NextJS works with the app router. In the app router, everything in the `/app` folder can be interpreted as a route, depending on the use of special files.

### Next Special Files

1. page.tsx

> This file declares a page in App Router. If it is in the root of `/app` folder (`/app/page.tsx`) it will define the `/` route. If it is in a subfolder like `/posts` (`/posts/page.tsx`) it will define the `/posts` route

2. layout.tsx

> This file declares the application layout. The layout will wrap the page, and in this file we also configure `global.css`, fonts and other global settings.

3. not-found.tsx

> This file declares the not found route, when the path does not exist is accessed NextJS will redirect the user to this page. This page is wrapped by `layout.tsx` 

4. error.tsx

> This file declares an error page (Using React Error Boundaries), when a component throws an error, this page will be rendered by NextJS. This page is wrapped by `layout.tsx`

## 📖 Learning Tips

---

### Server Side Rendenring

1. SSR Benefits

> With Server Side Rendering (SSR), the content will be redered by the server before being sent to the client, this approach improves the SEO and the user loading time enabling a better user experience.

2. Async Components

> Since components are rendered on the server, we can create async components and avoid relying on client-side hooks like useEffect.

---

### Images

3. `<img>` X `<Image />`

> Default next `<Image />` component in next js optimizes the images loading by serving the correctly image size for each device and cast the image format to Webp.

4. External images needs to be allowed (for external hosts)

> When we using external images with next `<Image />` component, we have to allow the host in the `next.config.js` to import this images. That measure assure more security in your frontend.

---

### Links

5. `<a>` X `<Link />`

> Using `<Link />` component for internal navigation in Next.js enables more optimized rendering, because the tag `<a>` re-render everything.

---
