# Blog Project

Welcome to the Blog Project! This repository contains the source code and content for a personal blog.

## Features

- Write and publish blog posts
- Categorize posts by tags
- Responsive design for mobile and desktop
- Commenting system

## Technology

This project utilizes the following technologies:

- **Appwrite**: A backend server for web, mobile, and flutter developers. It provides a set of easy-to-use REST APIs to manage your backend needs.
- **TinyMCE Editor**: A rich text editor that provides a user-friendly interface for writing and editing blog posts.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blog-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd blog-project
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server, run:
```bash
npm start
```
Open your browser and go to `http://localhost:3000` to view the blog.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```plaintext
# Appwrite configuration
VITE_APPWRITE_URL=''
VITE_APPWRITE_PROJECT_ID=''
VITE_APPWRITE_DATABASE_ID=''
VITE_APPWRITE_COLLECTION_ID=''
VITE_APPWRITE_BUCKET_ID=''

# TinyMCE configuration
VITE_TinyMCE_URL='your-tinymce-url'



