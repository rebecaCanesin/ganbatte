# Ganbatte Project

Ganbatte is a Japanese word that means something like "do your best". That was the inspiration for this project and became its name. By always doing our best and being passionate about what we do, we can build great things.

![Ganbatte](https://media1.tenor.com/m/1_9F5P9PLS4AAAAC/kanna-tamachi-ganbatte.gif)

This application aims to present the user with a list of anime and manga, it is a query application.
For the development of this application, the Kitsu API was used [Kitsu API](https://kitsu.docs.apiary.io/#). The application is available at this [link](https://ganbatte-delta.vercel.app/) and does not require authentication to navigate.



---

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install` or `yarn install`.
4. Start the development server with `npm run dev` or `yarn dev`.
5. Access the application in your browser at `http://localhost:3000`.

---

## The Challenge

This application was developed based on a challenge that determined the use of the following technologies:
- ✔ React Js
- ✔ Next Js
- ✔ TypeScript
- ✔ Ant.Design
- ❌ Less Css
- ✔ Vercel (server)

Of all the technologies, I was only unable to deliver the styling in Less. It was my first contact with this technology, unfortunately, I didn't have enough time to learn it sufficiently and solve the problems encountered, so I chose to finish the application without using Less, but to complete it.

### Issues Encountered:
Basically configuration problems with webpack that prevented me from compiling the .less files properly.

![Crying GIF](https://media1.tenor.com/m/Ih8bQ8iIlDUAAAAC/pikachu-sad.gif)

But, let's move forward and ganbatte...

To work around the situation, I used Styled Components in the client-side components and pure CSS in the server-side components. Is it the best approach? I would say it was the best that could be done at that moment.

I can even mention some advantages of using styled components, such as:

- ✔ Encapsulation: Styles are scoped to the component they belong to, reducing the risk of style conflicts across the application.
- ✔ Dynamic Styling: Styled components allow for dynamic styling based on props, enabling conditional rendering of styles.
- ✔ Ease of Maintenance: With styled components, styles are colocated with components, making it easier to understand and maintain code.
- ✔ Theming: Styled components support theming out of the box, allowing for consistent and customizable styling across the application.
- ✔ Better Developer Experience: Styled components provide a more pleasant developer experience with features like automatic vendor prefixing and IntelliSense support.
  
But I understand that using Less in this project made sense since Ant Design components are developed using the CSS preprocessor.

---

## About the Application Development

I created a prototype in Figma which had the following features:

- ✔ List of animes
- ✔ List of mangas
- ✔ Ability to filter by category
- ✔ Ability to filter by anime or manga
- ✔ Text search bar
- ❌ Various sorting filters
- ❌ Ability to log in
- ❌ Anime and manga collection page for logged-in users
- ✔ Anime or manga detail page


Home Prototype:
![Prototype Home](/public/assets/prototipo.png)

* The unimplemented features will be considered for future improvements.

## Learnings from the Project

- 📍 Deepened knowledge in Next.js
- 📍 First encounter with the Less preprocessor and basic learning of its use
- 📍 Decision-making on what to keep in the MVP considering the available development time
- 📍 Learning about SEO with Next-Seo
---


