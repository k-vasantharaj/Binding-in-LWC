# LWC Data Binding with Dynamic CSS

## Description
A Lightning Web Component demonstrating two-way data binding with dynamic CSS. Users can enter a CSS class name in the input box, apply it to text on button click, and the input clears for the next style entry.

## Features
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
