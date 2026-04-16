export const projects = [
    {
        id: 1,
        title: 'Astra',
        imageMobile: '/images/astra-mobile.png',
        imageDesktop: '/images/astra-desktop.png',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'Framer Motion', 'React Query', 'OpenAI', 'Thirdweb', 'Zustand', 'Jest', 'Unit Testing'],
        shortDescription: 'Figma for Fashion',
        description: 'Astra is an innovative platform designed to empower creators and makers by seamlessly connecting them with clients while providing secure, scalable payment infrastructure. The platform features a structured multi-step onboarding system for makers to build rich profiles, showcase portfolios, and manage service offerings, alongside a real-time collaboration environment powered by integrated messaging. It also incorporates a blockchain-based escrow mechanism with smart contract integration to guarantee transparent and trustless transactions between clients and creators. I led the frontend architecture and implementation of several mission-critical features, designing scalable, reusable component systems and optimizing performance across devices. I engineered dynamic, state-driven multi-step onboarding flows with advanced validation and predictable state management. I implemented WebSocket-based real-time messaging to enable low-latency, bidirectional communication, handling connection lifecycle management and message synchronization for a seamless chat experience. I integrated OpenAI APIs to build an AI-powered design assistant that allows users to generate creative concepts conversationally within the platform. To operationalize AI access, I architected and implemented a credit-based usage system by integrating Paystack for secure payments, building the full transaction-to-credit lifecycle including payment verification, credit allocation logic, and usage tracking. I also integrated the smart contract-based escrow workflow into the frontend, managed complex API interactions and asynchronous state updates, and ensured a highly responsive, intuitive user experience across desktop and mobile environments.',
        liveLink: 'https://www.astra.fashion',
        demoVideos: [
            {
                label: 'AI Design Assistant Demo',
                url: 'https://www.youtube.com/embed/24KFSj_E9dE'
            },
            {
                label: 'Chat pay with Escrow Demo',
                url: 'https://www.youtube.com/embed/6JR2mEXzCW4'
            }
        ]
    },
    {
        id: 2,
        title: 'DashDish',
        imageMobile: '/images/dashdish-mobile1.jpg',
        imageDesktop: '/images/Dashdish-desktop.jpeg',
        tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Mapbox', 'Zustand', 'Paystack', 'Tailwind CSS', 'Jest', 'React Native Testing Library'],
        shortDescription: 'Full-Stack Food Delivery App',
        description: 'DashDish is a full-stack food delivery mobile application built with React Native and Expo, featuring a dual-role system for customers and drivers with real-time order tracking, live GPS location updates, and integrated payments. The app targets the Nigerian market with ₦ currency, Lagos coordinates, and Paystack as the payment gateway. Customers can browse restaurants, build a cart, geocode their delivery address, pay via Paystack, and track their order live on a Mapbox map as the driver moves toward them in real time. Drivers receive order requests instantly via Supabase Realtime, can swipe right to accept or left to decline, and navigate an active delivery screen with a live route polyline, status update buttons, and GPS broadcasting. I architected the entire application from scratch, designing the database schema with Row Level Security across all tables, building a simulation engine that manages the full order lifecycle across six statuses with atomic race condition prevention, and implementing smooth driver marker animation using requestAnimationFrame interpolation between GPS coordinates for a natural movement feel. I engineered a persistent decline system that stores rejected orders in Supabase so they never reappear across sessions or devices, and built a collapsible bottom sheet on the tracking screen using the Animated API with snap-point gesture handling. I integrated Paystack on both web (inline JS popup) and native (WebView) platforms, and built an earnings dashboard with a weekly bar chart, Haversine-based distance calculation, and period-based filtering all without additional API calls.',
        repoLink: 'https://github.com/Dannon10/dashdish',
        liveLink: 'https://dash-dish.netlify.app',
        demoVideos: [
            {
                label: 'Customer Order Flow Demo',
                url: 'https://www.youtube.com/embed/2VBcOTXbZlE'
            },
            {
                label: 'Driver Tracking Demo',
                url: 'https://www.youtube.com/embed/4wl96uLV_aE'
            }
        ]
    },
    {
        id: 3,
        title: 'Cash Tracker',
        imageMobile: '/images/cash-tracker-mobile1.jpg',
        imageDesktop: '/images/cash-tracker-desktop.jpeg',
        tech: ['React Native', 'Expo', 'Typescript', 'Supabase', 'Zustand', 'Jest', 'Tailwind', 'Async Storage', 'Groq AI (Whisper + LLaMA)', 'React Native Testing Library', 'Netlify'],
        shortDescription: 'Fintech Finance Tracker',
        description: 'Cash Tracker is a full-stack cross-platform transaction tracking mobile application I designed and built from scratch using React Native and Expo. The app allows users to log, categorize, and analyze their income and expenses through a clean, intuitive interface with support for both dark and light themes. One of the standout features I\'m most proud of is the AI-powered voice input system users can speak naturally, and the app uses Groq\'s Whisper model to transcribe the audio and LLaMA 3 to intelligently parse the transaction details, including amount, category, and type, before populating the form automatically. This showcases my ability to integrate third-party AI APIs and build practical, user-focused features around them. On the backend, I used Supabase for authentication and real-time database management, implementing a complete auth flow with sign up, login, and protected routes. State management is handled with Zustand, keeping the app performant and the codebase clean without unnecessary complexity. The app also features a reports screen with interactive pie charts and monthly trend analysis built with React Native Gifted Charts, giving users meaningful insights into their spending patterns. I implemented animated onboarding screens, skeleton loading states, swipe-to-delete gestures, pull-to-refresh demonstrating strong attention to UI/UX detail. To ensure code reliability I wrote unit tests covering store logic, authentication flows, and component behavior using Jest and React Native Testing Library. The app is deployed as a web application on Netlify. This project demonstrates my skills in React Native, TypeScript, AI API integration, backend-as-a-service architecture, state management, testing, and delivering polished production-ready mobile applications.',
        liveLink: 'https://mycashtracker-app.netlify.app/',
        repoLink: 'https://github.com/Dannon10/cash-tracker',
        demoVideos: [
            {
                label: 'Cash Tracker Demo',
                url: 'https://youtube.com/embed/9DgNsWp5JHs'
            }
        ]
    },
    {
        id: 4,
        title: 'Task Manager',
        imageMobile: '/images/todo-mobile.jpg',
        imageDesktop: '/images/todo-desktop.png',
        tech: ['React', 'Typescript', 'Firebase', 'CSS',],
        shortDescription: 'Modern Notes App',
        description: 'A feature-rich task management tool built with React and TypeScript, designed to help users efficiently organize their daily tasks. The app allows you to add, edit, delete, filter, prioritize, and schedule tasks, complete with reminder notifications, drag-and-drop reordering, and Firebase sync for cloud-based persistence. This project demonstrates a strong grasp of state management, custom hooks, component architecture, and real-time data syncing, making it a well-rounded showcase of my frontend development skills.',
        liveLink: 'https://task-manager-1-five.vercel.app/',
        repoLink: 'https://github.com/Dannon10/task-manager',
        demoVideos: [
            {
                label: 'Task Manager Demo',
                url: 'https://youtube.com/embed/IWTBHFBA7xM'
            }
        ]
    },
    {
        id: 5,
        title: 'Scissors',
        imageMobile: '/images/scissor-mobile2.jpg',
        imageDesktop: '/images/scissor-desktop.png',
        tech: [' React', 'Typescript', 'Firebase', 'CSS',],
        shortDescription: 'Url Shortener',
        description: 'Scissors is a full-stack URL shortening platform I built using React 18, TypeScript, and Firebase. The application allows users to shorten long URLs, create custom aliases, generate branded QR codes, and track link performance through a personalized analytics dashboard. I implemented email/password authentication with Firebase Auth and built protected routes to ensure only authenticated users can access their dashboard. Each user’s links are securely stored in Cloud Firestore and scoped to their account. To handle Firebase’s asynchronous session restoration properly, I created a global AuthContext using `onAuthStateChanged`, ensuring reliable user state management across the app. The project follows a clean, scalable architecture with business logic separated into service layers for authentication and URL management. I created a custom hook to encapsulate the shortening logic and history state, and designed a tab-based dashboard that avoids unnecessary refetching of data. The analytics section displays total clicks per link with a 7-day performance chart, while the QR generator allows users to customize colors and download PNG codes. From a frontend perspective, I built a reusable component structure, implemented responsive layouts with CSS Modules, and structured the application using React Router v6 for clear navigation flows. The project demonstrates my ability to design and build a production-style web application that integrates third-party APIs, manages authentication securely, structures scalable React architecture, and delivers a polished user experience.',
        liveLink: 'https://scissor-url-app.netlify.app/',
        repoLink: 'https://github.com/Dannon10/Scissorapp',
        demoVideos: [
            {
                label: 'Scissors Demo',
                url: 'https://youtube.com/embed/VDjq-MyY8Rc'
            }
        ]
    },
    {
        id: 6,
        title: 'LendR',
        imageMobile: '/images/lendr-mobile.jpeg',
        imageDesktop: '/images/lendr-desktop.png',
        tech: [' React', 'Next.js', 'Typescript', 'Tanstack', 'SAAS/SCSS', 'Jest', 'Unit Testing'],
        shortDescription: 'Admin Dashboard',
        description: 'LendR is a modern user management dashboard built to simulate a real-world fintech admin system. The application fetches and displays user data from a mock API, enabling structured viewing, pagination, and detailed user records through a clean and responsive dashboard interface. The mock backend was created using a JSON data generator and deployed on Render, allowing the frontend to consume realistic API endpoints similar to a production environment. The dashboard supports paginated user lists and individual user detail views, mirroring how enterprise admin tools handle large datasets. The frontend was built with Next.js and React, written entirely in TypeScript for type safety and maintainability. Styling was handled using SCSS, ensuring a scalable and well-structured design system. The project also includes unit and integration tests written with Jest, improving reliability and validating core functionality such as data fetching and UI rendering. LendR demonstrates strong understanding of frontend architecture, API integration, testing, and dashboard-style application design commonly used in fintech and enterprise platforms.',
        liveLink: 'https://dannon-abayomi-lendsqr-fe-test.vercel.app/',
        repoLink: 'https://github.com/Dannon10/lendR'
    },
    {
        id: 7,
        title: 'Vendox',
        imageMobile: '/images/vendox-mobile.png',
        imageDesktop: '/images/vendox-desktop.png',
        tech: [' React', 'Redux', 'Javascript', 'CSS',],
        shortDescription: 'Mini E-commerce website',
        description: 'A sleek and responsive e-commerce web application built with React 19, Vite, and Redux for efficient state management. The app integrates with a public products API to dynamically fetch and display real product data. Key features include category-based browsing, detailed product views, and a fully functional cart system. This project demonstrates my strengths in API integration, global state management with Redux, component-based architecture, and building responsive, high-performance UIs for both desktop and mobile.',
        liveLink: 'https://vendox-rho.vercel.app',
        repoLink: 'https://github.com/Dannon10/vendox'
    },
    {
        id: 8,
        title: 'Weather App',
        imageMobile: '/images/weather-mobile.png',
        imageDesktop: '/images/weather-desktop.png',
        tech: ['React', 'CSS', 'JavaScript'],
        shortDescription: 'Weather Checker',
        description: 'React Weather App is a modern weather-checking application built with React 19, designed to provide users with real-time weather updates for any city worldwide. By integrating with a third-party weather API, it fetches current temperature, weather conditions, humidity and wind speed. The app features a responsive layout, clean UI, and intuitive search functionality, allowing users to quickly access accurate forecasts. This project showcases API integration, user-friendly interface design, and effective state management using React hooks—highlighting your strengths in building practical, data-driven applications.',
        liveLink: 'https://weather-app-mocha-gamma-64.vercel.app',
        repoLink: 'https://github.com/Dannon10/React-Weather-app'
    },
]
