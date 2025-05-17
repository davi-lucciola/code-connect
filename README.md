# 💻 Code Connect

This repository was created for learning through Alura NextJS Course
I am gonna document my learns in this repositories while i am doing the course.

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
