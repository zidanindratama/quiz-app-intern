---

# Quizzy

Quizzy is a web application designed to help users enhance their knowledge and challenge themselves with engaging quizzes. The platform allows users to take quizzes, track their progress, and view their results. Built with Next.js and various modern libraries, Quizzy offers a seamless and interactive quiz-taking experience.

## API

The questions for the quizzes are fetched from [Quiz API](https://quizapi.io/).

## Demo

Check out the live demo: [Quizzy Demo](https://quiz-app-intern-zidan.vercel.app/)

## Features

- **User Authentication**: Users can log in to their accounts and access personalized quiz sessions.
- **Quiz Timer**: Each quiz session has a timer to ensure timely completion of quizzes.
- **Progress Tracking**: Users can track their progress and resume quizzes from where they left off.
- **Quiz Results**: Users can view their quiz results, including correct and incorrect answers.
- **Responsive Design**: The application is fully responsive and works seamlessly across different devices.

## Technologies Used

| Technology         | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Next.js**        | Framework for building server-rendered React applications.                  |
| **React**          | JavaScript library for building user interfaces.                            |
| **Tailwind CSS**   | Utility-first CSS framework for styling.                                    |
| **Axios**          | HTTP client for making API requests.                                        |
| **React Hook Form**| Library for managing form state.                                            |
| **Zod**            | TypeScript-first schema declaration and validation library.                 |
| **Vercel**         | Hosting platform for deploying the application.                             |
| **ShadcnUI**      | Collection of modern UI components for building user interfaces.            |

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zidanindratama/quiz-app-intern.git
   cd quiz-app-intern
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_API_KEY=your_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

- `components/`: Contains reusable UI components.
- `hooks/`: Custom hooks for handling local storage and other functionalities.
- `pages/`: Contains the Next.js pages for routing.
- `public/`: Public assets like images and fonts.
- `utils/`: Utility functions and constants.

## Custom Hooks

### useUserData

A custom hook for interacting with the `localStorage` API to retrieve user data.

```typescript
"use client";

import { useState, useEffect } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        setUserData(JSON.parse(userDataString));
      }
      setLoading(false);
    }
  }, []);

  return { userData, loading };
};

export default useUserData;
```

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Zidan Indratama
- **Email**: zidanindratama03@gmail.com
- **GitHub**: [zidanindratama](https://github.com/zidanindratama)

---
