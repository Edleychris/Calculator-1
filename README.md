# JavaScript Calculator

A simple, responsive calculator built with **HTML, CSS, and Vanilla JavaScript**. This project demonstrates fundamental JavaScript concepts, including functions, event handling, DOM manipulation, conditional statements, and basic arithmetic operations.

## Features

- **Basic Arithmetic:** Perform addition, subtraction, multiplication, and division.
- **Chained Calculations:** Perform multiple operations in sequence, evaluated from left to right.
- **Decimal Support:** Enter decimal numbers while preventing multiple decimal points in a single number.
- **Clear Function:** Reset the calculator and start a new calculation.
- **Backspace:** Delete the last entered digit.
- **Keyboard Support:** Use your keyboard to enter numbers, operators, and control calculations.
- **Error Handling:** Displays a friendly error message when attempting to divide by zero.
- **Responsive Design:** Works across different screen sizes.

## Technologies Used

- HTML5 – Provides the calculator's structure.
- CSS3 – Handles styling and responsive layout.
- JavaScript (Vanilla JS) – Implements calculator logic and user interactions.

## Getting Started

No additional installation or dependencies are required.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd javascript-calculator
```

### 3. Run the Application

Open the `index.html` file in any modern web browser.

Alternatively, use the Live Server extension in Visual Studio Code.

## How to Use

1. Click the number buttons to enter a value.
2. Select an arithmetic operator (+, −, ×, ÷).
3. Enter the next number.
4. Press `=` to display the result.
5. Continue performing calculations or press `Clear` to reset.

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `0–9` | Enter numbers |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete the last digit |
| `Escape` | Clear the calculator |

## Testing

### 1. JavaScript Function Tests

Open your browser's Developer Tools (`F12`), navigate to the Console, and run the following commands:

```javascript
add(10, 5);        // Expected: 15
subtract(10, 5);   // Expected: 5
multiply(10, 5);   // Expected: 50
divide(10, 5);     // Expected: 2
operate('+', 12, 7); // Expected: 19
```

### 2. Calculator Functionality Tests

Test the following scenarios to verify that the calculator works as expected:

| Test | Expected Result |
|---|---|
| `12 + 7 - 5 × 3 =` | `42` (left-to-right evaluation) |
| `8 ÷ 0 =` | Displays a friendly error |
| `1 . 2 . 3` | Second decimal point is ignored |
| Press `Clear` | Resets the calculator |
| Press `Backspace` | Deletes the last entered digit |
| Use keyboard shortcuts | Performs the corresponding actions |

## Project Structure

```text
javascript-calculator/
│
├── index.html      # Calculator structure
├── style.css       # Calculator styling
├── script.js       # Calculator functionality
└── README.md       # Project documentation
```

## Learning Objectives

This project provides practical experience with:

- Writing and organizing JavaScript functions.
- Working with DOM elements and event listeners.
- Handling user input and keyboard events.
- Implementing arithmetic operations.
- Managing application state.
- Handling invalid operations and edge cases.

## Author

**Nkiruka Edith Onwugbufor**

## License

This project was created for learning and educational purposes.