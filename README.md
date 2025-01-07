\documentclass{article}
\usepackage{listings}
\usepackage{hyperref}
\usepackage{color}
\usepackage{tabularx}

\title{React Blog Application Documentation}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Tech Stack}
\begin{itemize}
    \item React 18
    \item Redux Toolkit
    \item Appwrite
    \item React Router v6
    \item React Hook Form
    \item TinyMCE
    \item Tailwind CSS
\end{itemize}

\section{Features}
\begin{itemize}
    \item User authentication
    \item CRUD operations for blog posts
    \item Rich text editor
    \item Image uploads
    \item Responsive design
    \item Form validation
    \item Protected routes
\end{itemize}

\section{Installation}
\begin{lstlisting}[language=bash]
git clone <repository-url>
cd blog
npm install
\end{lstlisting}

\section{Environment Variables}
Create a \texttt{.env} file with:
\begin{lstlisting}
VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID='your_project_id'
VITE_APPWRITE_DATABASE_ID='your_database_id'
VITE_APPWRITE_COLLECTION_ID='your_collection_id'
VITE_APPWRITE_BUCKET_ID='your_bucket_id'
VITE_TinyMCE_URL='your_tinymce_api_key'
\end{lstlisting}

\section{Development}
Start the development server:
\begin{lstlisting}[language=bash]
npm run dev
\end{lstlisting}

\section{Production Build}
Build for production:
\begin{lstlisting}[language=bash]
npm run build
\end{lstlisting}

\section{License}
This project is licensed under the MIT License.

\end{document}