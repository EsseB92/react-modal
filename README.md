# React Modal Component

A reusable React modal component with customizable styles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)

## Installation

To use this component in your React project, you can install it via npm or yarn:

```bash
npm install @esseb92/react-modal
# or
yarn add @esseb92/react-modal
```

## Usage

Import the Modal component into your React application:

```javascript
import Modal from "@esseb92/react-modal";
import "@esseb92/react-modal/Modal.css";
```

Then, you can use the Modal component in your application:

```javascript
<Modal
  closeModal: setOpenModal,
  maxWidth: "500px"
  // Other props for customization
/>
```

## Props

The Modal component accepts the following props:

### Global Part

- `closeModal`: A function to close the modal.
- `maxWidth`: Maximum width of the modal.
- `closingBtn`: A URL for a closing button image.
- `borderRadius`: Border radius of the modal.
- `padding`: Padding of the modal.
- `margin`: Margin of the modal.
- `fontFamily`: Font family for the modal.

### Header Part

- `modalHeader`: Header text for the modal.
- `colorHeader`: Text color for the header.
- `bgColorHeader`: Background color for the header.
- `textAlignHeader`: Text alignment for the header.
- `fontSizeHeader`: Font size for the header.
- `paddingHeader`: Padding for the header.
- `marginHeader`: Margin for the header.

### Body Part

- `modalBody`: Content for the modal body.
- `colorBody`: Text color for the body.
- `bgColorBody`: Background color for the body.
- `textAlignBody`: Text alignment for the body.
- `fontSizeBody`: Font size for the body.
- `paddingBody`: Padding for the body.
- `marginBody`: Margin for the body.

### Footer Part

- `modalFooter`: Content for the modal footer.
- `colorFooter`: Text color for the footer.
- `bgColorFooter`: Background color for the footer.
- `textAlignFooter`: Text alignment for the footer.
- `fontSizeFooter`: Font size for the footer.

## Examples

Here's an example of how to use the Modal component:

```javascript
import Modal from "@esseb92/react-modal";
import "@esseb92/react-modal/Modal.css";
```

```javascript
const [openModal, setOpenModal] = useState(false);
const contentBody = (
  <p>
    Thanks for clicking. That felt good. <br />
    Click <a
      href="#"
      onClick={() => {
        setOpenModal(false);
      }}
      className="clickable"
    >
      close
    </a>, click the overlay, or press ESC
  </p>
);
```

```javascript
{openModal && (
  <Modal
    // Global Part
    closeModal: setOpenModal,
    maxWidth: "500px",
    closingBtn: XMarkIcon,
    borderRadius: "8px",
    padding: "15px 30px",
    fontFamily: '"Lato", "Helvetica Neue", arial, sans-serif',
    // Body Part
    modalBody: contentBody,
    colorBody: "#5e6c76",
    bgColorBody: "white",
    textAlignBody: "left",
    fontSizeBody: "18px",
    paddingBody: "0",
  />
)
}
```

![Alt text](image.png)
