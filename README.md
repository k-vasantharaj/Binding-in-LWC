# LWC Data Binding with Dynamic CSS

## Description
A Lightning Web Component demonstrating two-way data binding with dynamic CSS. Users can enter a CSS class name in the input box, apply it to text on button click, and the input clears for the next style entry.

<img width="300" height="175" alt="bigText" src="https://github.com/user-attachments/assets/1f17e8f5-b69b-4659-b4a2-3c928f452ba9" />
<img width="300" height="169" alt="highlight" src="https://github.com/user-attachments/assets/d3bd53ad-9b22-4d1b-9d0f-c3d49d81445a" />
<img width="300" height="167" alt="blueText" src="https://github.com/user-attachments/assets/17ed1d21-50ed-4bd9-bd91-a214468444fb" />
<img width="300" height="175" alt="italicText" src="https://github.com/user-attachments/assets/853e197a-ce04-450b-91db-bd30e6110516" />
<img width="300" height="163" alt="monoText" src="https://github.com/user-attachments/assets/89c50b1f-6c30-4f34-8718-0a0783483295" />
<img width="300" height="159" alt="redText" src="https://github.com/user-attachments/assets/a8e8c99b-8dbc-4499-8175-00e4e67eb8dc" />

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
.blueText {
    color: blue;
    font-weight: bold;
}
.italicText {
    font-style: italic;
}
.monoText {
    font-family: "Courier New", monospace;
}
