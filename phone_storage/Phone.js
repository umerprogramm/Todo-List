import styled from "styled-components";

export const Container = styled.div`
h1{
    color: white;
    text-align: center;
}
background-color : black;
flex: 1;
margin: 0px;
input{
margin: 15px;
color: purple;
justify-content: center;
align-items: center;
width: 80%;
height: 10px;
border-radius: 15px;
padding: 15px;
font-size: 15px;
border: 3px solid  #7cffcb;

}
ul{
    list-style-type: none;
    padding: 5px;
}

ul > li{
    background-image : linear-gradient(315deg, #20bf55 0%, #01baef 74%);
border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    color: black;
    height: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
button{
  
background-image  : linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
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

 ul>li>span{
     float: right;
     padding-top: -10px;
     cursor: pointer;
 }   

`