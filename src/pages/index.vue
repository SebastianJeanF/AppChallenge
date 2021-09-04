
<!--<script> !-->
<!-- import styles from 'css/style.css' !-->



<template>
<ion-page>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <title>CSS Cheat Sheet</title>
        
    </head>
    <div class="containter"> 
        <div class="box-1">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet beatae laboriosam sunt nulla consectetur vel nostrum ut, 
                incidunt autem itaque reprehenderit quidem unde distinctio 
                magnam repellendus maxime quod provident sapiente.</p>
        </div>
        <div class="box-2">
            <h1>Adios World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet beatae laboriosam sunt nulla consectetur vel nostrum ut, 
                incidunt autem itaque reprehenderit quidem unde distinctio 
                magnam repellendus maxime quod provident sapiente.</p>
        </div>
        <div class="categories">
            <h2>Categories</h2>
            <ul>
                <li><a href="#">Category
                1</a></li>
                <li><a href="#">Category
                2</a></li>
                <li><a href="#">Category
                3</a></li>
                <li><a href="#">Category
                4</a></li>
            </ul>
        </div>

        <form class = "my-form">
            <div class="form-group">
                <label>Name: </label>
                <input type="text" name="name" placeholder = "Name">
            </div>
            <div class="form-group">
                <label>Email: </label>
                <input type="text" name="email" placeholder = "Email">
            </div>
            <div class="form-group">
                <label>Message: </label>
                <textarea name="message" placeholder = "Message"></textarea>
            </div>
            <input class="button" type="submit" value="Submit" 
            name=""/>
        </form>

        <div class= "block">
            <h3>Header</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos explicabo culpa, fuga 
                    recusandae qui quas itaque maiores consequatur facilis, nihil incidunt 
                    sed iusto quis perspiciatis repudiandae laudantium iste 
                    dicta!
                </p>
        </div>
        
        <div class= "block">
            <h3>Header</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos explicabo culpa, fuga 
                    recusandae qui quas itaque maiores consequatur facilis, nihil incidunt 
                    sed iusto quis perspiciatis repudiandae laudantium iste 
                    dicta!
                </p>
        </div>
        
        <div class= "block">
            <h3>Header</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos explicabo culpa, fuga 
                    recusandae qui quas itaque maiores consequatur facilis, nihil incidunt 
                    sed iusto quis perspiciatis repudiandae laudantium iste 
                    dicta!
                </p>
        </div>


        <div class="clr">       
        </div>

        


        <div id="main-block">
            <h3>Header</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos explicabo culpa, fuga 
                    recusandae qui quas itaque maiores consequatur facilis, nihil incidunt 
                    sed iusto quis perspiciatis repudiandae laudantium iste 
                    dicta!
                </p>
        </div>
        
        <div id="sidebar">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos explicabo culpa, fuga 
                    recusandae qui quas itaque maiores consequatur facilis, nihil incidunt 
                    sed iusto quis perspiciatis repudiandae laudantium iste 
                    dicta!
                </p>
        </div>

        <hr/>
        <div class="p-box">
            <h1>Hello</h1>
            <h2>Goodbye</h2>
        </div>
        <ul class="my-list">
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
            <li>List Items</li>
        </ul>

    </div> <!-- ./container-->
    <a class="fix-me button" href="">Hola</a>
    <div style  = "margin-top: 500px">
    </div>



</html>
</ion-page>
</template>

<script>

import { IonPage } from '@ionic/vue';

export default{ 
    components: {
         IonPage: IonPage

    } 
}
</script>




