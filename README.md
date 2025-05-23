
# 📸 Angular 19 Pinterest-Like Image Gallery

A responsive,  image gallery built using **Angular 19**. This application fetches stunning images from the **Unsplash API**, allowing users to browse, search, and view images in a clean, modern UI. Built with standalone Angular components

## 🔧 Features

- **Home Page** – Displays a masonry grid of curated/random images.
- **Explore Page** – Space for future categories or curated collections.
- **Single Image View** – View selected image with related suggestions.
- **Profile Page** – A base for user-specific content (extendable).
- **Masonry Layout** – Responsive column-based layout that adapts to screen sizes.
- **Angular 19 Standalone Components** – Clean, maintainable architecture.
- **Dark Mode UI** – Sleek and user-friendly design.

---

## 🧰 Tech Stack

- [Angular 19](https://angular.io)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Unsplash API](https://unsplash.com/developers)

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/angular-image-gallery.git

# Navigate to the project directory
cd angular-image-gallery

# Install dependencies
npm install

# Add your Unsplash API key in `apiservice.service.ts`
# Replace YOUR_ACCESS_KEY with your actual Unsplash access key
```

### Run the app

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── UI/                  # Reusable UI components (card, navbar, etc.)
│   ├── pages/               # Feature pages (home, explore, singleview)
│   ├── apiservice.service.ts
│   └── app.routes.ts
├── assets/
├── environments/
```

---

## 💡 Future Enhancements

- 🔐 User authentication & session
- ❤️ Save/Favorite images
- ♾️ Infinite scroll
- 🗂️ Category filters

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 🌟 Acknowledgements

- [Unsplash API](https://unsplash.com/developers)
- [Angular](https://angular.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
