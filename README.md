# React News API

### Description

This is a big project based on learning React step-by-step. So, resolving main task I went several stages:<br/>
**1. Create app, using Class components**
- CRA + Typescript + eslint + prettier
- Add React-Router version 6, pages: Main, About us, Form, 404
- Implement Search panel on Main page. Using News API we have to get data from API and show cards
- Create form on Form page (Add functionality: collect information through a form -  text input, date input, dropdown/select, checkbox, switcher, file upload (image)). After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.
- Add tests for components using React Testing Library

**2. Rewrite project with Functional component (hooks) retaining the functionality**

**3. Implement state management solution using useReducer and Context API (global state) for search results and form data saving**
- now, when switching between pages, all data should be saved
- implement sorting and pagination
- show search details in a separate page

**4. Rewrite the state management to Redux using React Toolkit**

### Conclusion

Working with this project I got a rich experience in using React! It was WOW!

*
*
*

## UPD 12/2022: Deploy link [here](https://react-components-pesukarhutg.netlify.app/), but unfortunately there is an issue with Cors-policy, so News API doesn't work :/


*
*
*


**1) Main page with Search panel and cards ====================================**

![Снимок-01](https://user-images.githubusercontent.com/39487464/209476954-3447ac0d-fa51-4967-b3f8-fc72af9e6536.JPG)

**2) we can see search details in a separate page =============================**

![Снимок-33](https://user-images.githubusercontent.com/39487464/209476958-c1284705-e3e3-4df9-a2fd-2e48671ffd62.JPG)

**3) Form page according task =================================================**

![Снимок-66](https://user-images.githubusercontent.com/39487464/209476960-711526fb-0125-4813-a0ac-b6b0ccdc69b9.JPG)




