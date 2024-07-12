Sure! Below is a README file for your project.

---

# React Native Shopping App

This is a React Native shopping app with a home screen displaying various products and a cart screen that shows the items added to the cart. Users can add items to the cart from the home screen and view/remove items in the cart screen.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screens](#screens)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display products on the home screen.
- Add items to the cart from the home screen.
- View and remove items from the cart.
- Persistent cart storage using AsyncStorage.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Change directory to the project folder:

    ```bash
    cd your-repo-name
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Install React Navigation dependencies:

    ```bash
    npm install @react-navigation/native @react-navigation/stack
    npm install react-native-screens react-native-safe-area-context
    ```

5. Start the development server:

    ```bash
    npx react-native run-android
    npx react-native run-ios
    ```

## Usage

1. **Home Screen**: Browse products and add items to the cart.
2. **Cart Screen**: View items in the cart and remove items if necessary.

## Screens

### HomeScreen
![WhatsApp Image 2024-07-03 at 22 11 41_9cf613f0](https://github.com/Gryp-tech/rn-assignment6-11048898/assets/170188389/c1800abf-f3ac-40fe-82a8-d16a421039be)

- Displays a list of products.
- Each product has an "Add to Cart" button.
- Navigation to CartScreen using the shopping bag icon.

### CartScreen
![WhatsApp Image 2024-07-03 at 22 11 41_ec33583f](https://github.com/Gryp-tech/rn-assignment6-11048898/assets/170188389/d7a96d8e-7688-4c6f-8b0f-5a7c4f0614d8)

- Displays items added to the cart.
- Each item has a "Remove from Cart" button.

  ### ProductDetails
- Displays the details about the products
- Displays other needed informations
- 
![WhatsApp Image 2024-07-12 at 17 59 51_b9588199](https://github.com/user-attachments/assets/13df78eb-ef1b-4e9f-80c5-ee57539c3fe1)

### A Drawer Component
![WhatsApp Image 2024-07-12 at 17 59 51_7680dc84](https://github.com/user-attachments/assets/669dbc65-6dcb-4a2b-b0a8-cc337830ebd0)


## Dependencies

- `react-native`: The core React Native library.
- `@react-navigation/native`: Navigation library for React Native.
- `@react-navigation/stack`: Stack navigator for React Navigation.
- `react-native-screens`: Optimizes navigation performance.
- `react-native-safe-area-context`: Handles safe area insets.
- `@react-native-async-storage/async-storage`: Persistent storage for React Native.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a clear and concise overview of the project, its features, installation steps, and usage instructions. Adjust the repository URL and any other specific details as needed.
