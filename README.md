# LWC Data Binding with Dynamic CSS

## Description
A Lightning Web Component demonstrating two-way data binding with dynamic CSS. Users can enter a CSS class name in the input box, apply it to text on button click, and the input clears for the next style entry.
<img width="325" height="190" alt="bigText" src="https://github.com/user-attachments/assets/3905cdb2-b5ca-440d-8b81-ef4c78a8e278" />
<img width="323" height="179" alt="blueText" src="https://github.com/user-attachments/assets/49c14364-b856-4dcc-a828-a969408fc397" />
<img width="320" height="180" alt="highlight" src="https://github.com/user-attachments/assets/f7904de7-c003-4361-9238-55acabb81e93" />
<img width="323" height="176" alt="monoText" src="https://github.com/user-attachments/assets/13dcc63d-4521-4ca5-96fb-008f3c1b8081" />
<img width="325" height="190" alt="italicText" src="https://github.com/user-attachments/assets/7ecf9183-8b39-4124-bb04-4fd48a1e0beb" /><img width="317" height="168" alt="redText" src="https://github.com/user-attachments/assets/beb2d2d4-4f57-4505-ab81-7008de6a0897" />


s://github.com/user-attachments/assets/60a50830-3530-4f17-8840-8d1c1cac2130" />

- Apply dynamic CSS styling using two-way binding.
- Supports multiple styles (`.redText`, `.bigText`, `.highlight`).
- Input resets after applying style.
- Can be deployed on Home Page, Record Page, or App Page.

## Installation
1. Clone this repository.
2. Deploy the component to your Salesforce org using SFDX or VS Code.
3. Add the component to a Lightning page (App Builder).

## Usage
1. Type a class name (e.g., `redText`, `bigText`, or `highlight`) in the input box.
2. Click **Apply Style**.
3. The text "AJ SKILL DEVELOPMENT" updates with the applied style.

## Example Styles
```css
.redText {
    color: red;
    font-weight: bold;
}
.bigText {
    font-size: 25px;
}
.highlight {
    background-color: yellow;
    padding: 5px;
    border-radius: 8px;
}
