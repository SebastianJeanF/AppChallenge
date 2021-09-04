<template>
   <!-- Kebab case always works with Vue !-->
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button> <!-- This makes it dynamic!-->
                 <!--Neccessary for proper css !-->
                 </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title> <!--We could use a name slot to make this dynamic too !-->
            </ion-toolbar> <!--Interpolatino is used instead!-->
        </ion-header>

        <ion-content>
             <!-- default-href="/mypage" !-->
            <slot />
        </ion-content>
    </ion-page> 
    <!-- Always use ionpage!-->
</template>

<script>
import { 
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonContent,
    IonBackButton,
    IonButtons
    } 
    from '@ionic/vue';
//4 essential components you need in every new page you build
//imported locally

export default { 
    props: ['pageTitle', 'pageDefaultBackLink'],
    components:{
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonBackButton,
    IonButtons
   }
}

</script>