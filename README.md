### README

#### Overview
This backend project is an Express application built with TypeScript. It connects locally to a desktop forms application, handling data submissions and retrieval. All data from the forms app is saved to a `db.json` file.

#### Features
- **API Endpoints**:
  - **Submit Data**: Accepts and saves form data to `db.json`.
  - **Read Data**: Retrieves stored submissions from `db.json`.
  - **Ping Backend**: Verifies connectivity with the backend service.

#### Installation
1. **Clone the Repository**:
   ```sh
   git clone <repository_url>
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Build the Project**:
   ```sh
   npm run build
   ```

4. **Start the Server**:
   ```sh
   npm start
   ```

#### Configuration
- Ensure the `db.json` file is located in the correct path as specified in the application.
- The server runs locally and listens for connections from the desktop forms app.

#### Usage
1. **Connect Desktop App**: Configure the desktop forms app to send HTTP requests to the backend server (default `http://localhost:3000`).
2. **Submit Data**: Use the form's submit feature to send data to the backend.
3. **View Data**: Access stored submissions via the desktop app's view feature.

This setup enables seamless integration and data management between the desktop forms application and the backend service.
