<h1 align="center">
  <br>
  <a href="https://github.com/audreydiez/react-clean-modal/blob/main/src/assets/logo_modal.svg">
<img src="https://github.com/audreydiez/react-clean-modal/blob/main/src/assets/logo_modal.svg" alt="react-clean-modal" width="200">
</a>
  <br> 
  React-clean-modal
  <br>
</h1>

<h4 align="center">A minimal modal plugin for React and very easy to use.</h4>

<div align="center">
  <a href="https://www.npmjs.com/package/react-clean-modal">
    <img src="https://badge.fury.io/js/react-clean-modal.svg"
         alt="npm package">
  </a>
  <a href="https://img.shields.io/npm/dt/react-clean-modal">
      <img src="https://img.shields.io/npm/dt/react-clean-modal">
  </a>
  <a href="https://img.shields.io/github/license/audreydiez/react-clean-modal">
    <img src="https://img.shields.io/github/license/audreydiez/react-clean-modal">
  </a>
<a href="https://img.shields.io/github/contributors/audreydiez/react-clean-modal">
    <img src="https://img.shields.io/github/contributors/audreydiez/react-clean-modal">
  </a>
</div>

<div align="center">
  <a href="https://img.shields.io/badge/statements-85.71%25-yellow.svg?style=flat">
      <img src="https://img.shields.io/badge/statements-85.71%25-yellow.svg?style=flat">
  </a>
  <a href="https://img.shields.io/badge/branches-81.1%25-red.svg?style=flat">
    <img src="https://img.shields.io/badge/branches-81.1%25-red.svg?style=flat">
  </a>
<a href="https://img.shields.io/badge/functions-90.9%25-yellow.svg?style=flat">
    <img src="https://img.shields.io/badge/functions-90.9%25-yellow.svg?style=flat">
  </a>
<a href="https://img.shields.io/badge/lines-85.71%25-yellow.svg?style=flat">
    <img src="https://img.shields.io/badge/lines-85.71%25-yellow.svg?style=flat">
  </a>
</div>

<p align="center">
<a href="#live-examples">Live examples</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Contributing</a> •
  <a href="#license">License</a> •
  <a href="#contact">Contact</a>
</p>

## Live examples

You can see code examples [here](https://github.com/audreydiez/react-custom-modal/blob/main/src/App.js).
</br>
You can see live demo [here](https://youthful-edison-51a3c3.netlify.app/).

## Key Features

-   Modal Portal: insert your own content inside the modal
-   Custom buttons: Use array with your buttons (event handling available)
-   Custom footer: add a footer with your button and align them
-   Close: with icon on top, on overlay click or/and on mouse scroll
-   Animations: Overlay fade-in and modal show-up
-   Custom props: add aria-label, data-testid, and custom css classes

## How To Use

To use the modal plugin:

```bash
# in your project root terminal
$ npm i react-clean-modal
```

Contributing/Fork : you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies
$ npm install

# Run the app
$ npm run start
```

## Documentation

Import Modal component and the hook useModal.
Props isVisible and hide are required.

```jsx
import React from 'react'
import { Modal, useModal } from 'react-clean-modal'

function App() {
    const { isShowing: showModal, toggle: toggleModal } = useModal()
    return (
        <>
            <button type="button" className="btn" onClick={toggleModal}>
                Open me!
            </button>

            <Modal isVisible={showModal} hide={toggleModal}>
                // Your content
                <h1>Title</h1>
                <div>Content</div>
                <button type="button" className="btn-clean-modal" onClick={toggleModal}>
                    Close me!
                </button>
            </Modal>
        </>
    )
}
```

### Custom footer

You can pass an array with button (custom classes, content and event function) to display a modal footer.

```jsx
import React from 'react'
import { Modal, useModal } from 'react-clean-modal'

function App() {
    const { isShowing: showModal, toggle: toggleModal } = useModal()

    const customEvent = () => {
        alert('Ah')
    }
    const arrayOfBtn = [
        {
            text: 'Close modal',
            className: 'btn-clean-modal'
        },
        {
            text: 'Alert me!',
            className: 'btn-clean-modal',
            eventHandling: customEvent
        }
    ]
    return (
        <>
            <button type="button" className="btn" onClick={toggleModal}>
                Open me!
            </button>

            <ReactCleanModal
                isVisible={showModal}
                hide={toggleModal}
                customFooter={arrayOfBtn}
                customFooterAlign={'left'}>
                // Your content
                <h1>Title</h1>
                <div>Content</div>
            </ReactCleanModal>
        </>
    )
}
```

### Waiting with spinner

You can show a spinner when you waiting for async function. the modal toggle will hide spinner automatically. In your function, launch spinner, get data and launch modal.

```jsx
import React from 'react'
import { Modal, useModal } from 'react-clean-modal'

function App() {
    const {
        isShowing: showModal,
        toggle: toggleModal,
        isShowingSpinner: showSpinner,
        toggleSpinner: toggleSpinner
    } = useModal()

    const launchModalTimer = () => {
        toggleSpinner()

        setTimeout(() => {
            toggleClassicModal()
        }, 3000)
    }

    return (
        <>
            <button type="button" className="btn" onClick={launchModalTimer}>
                Open me!
            </button>

            <ReactCleanModal isVisible={showModal} hide={toggleModal} showSpinner={showSpinner}>
                // Your content
                <h1>Title</h1>
                <div>Content</div>
            </ReactCleanModal>
        </>
    )
}
```

### All props

| Prop                | Type         | Required?    | Default              | Description                                                                           |
| ------------------- | ------------ | ------------ | -------------------- | ------------------------------------------------------------------------------------- |
| isVisible           | boolean      | **required** | false                | Event handler for modal (custom hook).                                                |
| hide                | function     | **required** | Hook to toggle modal | Event handler for modal (custom hook).                                                |
| animations          | boolean      | _optional_   | false                | true: fade-in and show-up animation.                                                  |
| ariaLabelledBy      | string       | _optional_   | -                    | ariaLabelledBy={'aria-label'} set in the modal container, linked with your own title. |
| closeOnOverlayClick | boolean      | _optional_   | false                | true: Modal will close on overlay click.                                              |
| closeOnScroll       | boolean      | _optional_   | false                | true: Modal will close on mouse scroll.                                               |
| closeOnTop          | boolean      | _optional_   | false                | true: Icon on right top displayed for close modal.                                    |
| customClass         | string       | _optional_   | -                    | Add a custom class to all HTML class attributes for override styles.                  |
| customFooter        | Array.Object | _optional_   | -                    | Add your buttons with proper event to the modal footer.                               |
| customFooterAlign   | string       | _optional_   | 'center'             | Align your buttons array ('left', 'center','right').                                  |
| testId              | string       | _optional_   | -                    | Add data-testid attribute to the modal container for tests.                           |
| showSpinner         | boolean      | _optional_   | false                | Update modal display with custom hook. See example above.                             |

## Credits

This software uses the following open source packages:

-   [React](https://fr.reactjs.org/)
-   [Babel/core](https://babeljs.io/)
-   [SASS](https://sass-lang.com/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Testing-library](https://testing-library.com/)
-   [istanbul-badges-readme](https://www.npmjs.com/package/istanbul-reporter-shield-badge)
-   [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
-   [Enzyme](https://enzymejs.github.io/enzyme/)

## Contribute

### You want to contribute ?

You can read this: [CONTRIBUTING.md](https://github.com/Yagini/LionelCorre-P14-Modal-react-module/blob/main/CONTRIBUTING.md). Contributors wanted :)

### Contact

Audrey Diez - [@Linkedin](https://www.linkedin.com/in/audrey-diez-5862345b/) - audrey.diez@gmail.com
