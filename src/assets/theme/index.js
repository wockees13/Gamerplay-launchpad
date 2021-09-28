import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

::selection {
    background: #333333;
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
    
    margin: 0px;

}
body {
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.bodyColor ? props.theme.bodyColor : '#BEABDF'};
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;

    background: #082032;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.headingColor ? props.theme.headingColor : '#FFFFFF'};  
}

p{
  font-family: sans-serif;
    margin: 0 0 15px 0;
}

a{
    text-decoration: none;
    color: ${props => props.theme.headingColor};
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}

.text-center{
  text-align: center;
}

button, .btn{
  display: inline-block;
  width: 170px;
  height: 60px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}
nav {
  display:flex;
  justify-content: flex-end;
  padding: 1rem;
}
.connect-btn {
  padding:0.5rem 1rem;
  background-color:#21B573;
  border-radius: 2rem;
  margin-right: 0.5rem;
  font-size: 1rem;
}
.row {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
}
.coins__list {
  display:flex;
  flex-direction: column;
  margin-top: 2rem;
}
.col {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.coin {
  display:flex;
  margin-right: 4rem;
}
.coin > img {
  width: 25px;
  height:25px;
  margin-right:1rem
}
.heading {
  font-size: 2rem;
}
.buy-btn {
  margin-top:2rem;
  color: white;
}
.input {
  max-width: 400px;
  width: 100%;
  height: 50px;
  padding: 1rem;
}
.container {
  padding-left: 10%;
  padding-right: 10%;
}
@media only screen and (min-width: 500px) {
  .heading {
    font-size: 3rem;
  }
  .col {
    width: 40%;
    margin:0;

  }
  .row {
    display:flex;
  }
  nav {
    display:flex;
    justify-content: flex-end;
    padding: 2rem;
  }
  .connect-btn { 
    margin-right: 0.5rem;
    padding:1rem 2rem;
    font-size: 1.2rem;
  }
  .coins__list {
    flex-direction: row;
  }
  .coin > img {
    margin-right:0.5rem
  }
}
`

export default GlobalStyle