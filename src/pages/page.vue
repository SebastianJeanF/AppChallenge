<template>
   <!-- Kebab case always works with Vue !-->
    <base-layout page-title="All memories">
            <ion-list>
                <ion-item
                    v-for="memory in memories"
                    :router-link="`/mypage/${memory.id}`"
                    :key="memory.id"
                > 
                    <ion-thumbnail slot="start">
                        <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                    </ion-thumbnail>
                    <ion-label>
                        <b>{{ memory.title }}</b>
                    </ion-label>

                </ion-item>
                
            </ion-list>
    </base-layout>
    <!-- Always use ionpage!-->
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail} from '@ionic/vue';
//4 essential components you need in every new page you build
//imported locally

export default { 
    components:{
    IonList,
    IonItem,
    IonImg, //Loaded lazely
    IonThumbnail
   },

// You can use the options API or the composition API (the option api is being used)


// data() may not work in composition API video: 1:22:38
    data() {
        return {
            memories : [
                {id: 'ml',
                image: 'https://th.bing.com/th/id/OIP.zTZdB_BzfFWv6XBA4TI2yQHaFj?pid=ImgDet&rs=1', 
                title: 'A trip into the mountains', 
                description: 'It was a really nice trip!',
                },
                {id: 'm2', 
                image: 'https://th.bing.com/th/id/R.ab89a6923ff58f9865e0ff5c6fb3ac28?rik=y2VE2XaRaZvCog&pid=ImgRaw&r=0',
                title: 'A trip into the beach', 
                description: 'It was a really nice trip!',
                },
                {id: 'm3',
                image: 'https://th.bing.com/th/id/R.47e2b7fd61b4b009a2b5227e47d0bba7?rik=gaB%2bVXcEOD4lCw&pid=ImgRaw&r=0', 
                title: 'A trip into ur mom', 
                description: 'It was a really nice trip!',
                },
            ],
        };
    }
}; //We should manage our data in a more global place, where all components have access to it (could be in app)

</script>