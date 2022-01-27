import styled from "styled-components";

export const Container = styled.div`

background-color : black;
flex: 1;
margin: 0px;
input{
margin: 15px;
justify-content: center;
align-items: center;
width: 80%;
height: 10px;
border-radius: 15px;
padding: 15px;
font-size: 15px;
border: 3px solid green;
}
ul{
    list-style-type: none;
    padding: 5px;
}

ul > li{
    background-color: palegreen;
border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
}
button{
    background-color: lightgreen;
    padding: 5px;
    margin-left: 50px;
    border-radius: 15px;
    color: white;
    height: 40px;
    font-size:18px;
    font-family: ' Arial, Helvetica, sans-serif';
    flex: 1;
    justify-content: center;
    align-items: center;
    }

`