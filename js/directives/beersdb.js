//Since there is no real backend (and none needed), this is just a 
//global var where a mongodb-like object is set up.

var beersDB = {
    drone:{
        name:"Drone",
        urlName:'drone',
        shortDesc: "The Drone, our fantastic Porter (5.8% ABV), has aromas of roasted malt, chocolate, caramel and coffee. The color is dark brown and has a light brownish foam. The Drone is very drinkable and is smoothly balanced. The Drone (and Drone²) is our only beer with an artwork representing a male; we couldn't put a female artwork on a male bee ;-)",
        longDesc: 'Drone is a Porter.\
\
Porter is a type of dark beer, coming from London, it was first made during the 18th century. It is a derivative of brown beer, made from brown malt with a lot of hop. The beer is called Porter since it was very popular among the street and river porters. In 1802 the writer John Feltham wrote about the history of Porter, which was then used as the basis for most writings on this subject. However, there is very limited contemporary evidence on this version of the history of Porter. Feltham\'s story was based on a letter written by Obadiah Poundage (who for decades worked in the London brewing industry), in the 1760s. Feltham interpreted the text in a different way, most probably not correctly, because he was not familiar with the 18th century brewery terminology. He said that during the 18th century in London there was a popular drink called the "three threads". The three threads was made from a mixture of third of a pint of ale, beer and "twopenny" (the strongest beer, that costs two pence). Around 1730, wrote Feltham, there was a brewer called Harwood who brewed a beer called "Entire" which tasted very similar to the "three threads" which later was known as Porter. Porter is already mentioned in 1721, but only in Feltham\'s writing it states that this beer was made to create the "three threads". Instead, the beer seems to have evolved from the brown beer which was already brewed at that time in London. During 1700 beer brewers sold the beer when it was very young and it matured at the shop. Porter was the first beer that was already matured in the brewery and was ready to drink immediately. It was also the first beer that could be produced on a larger scale. A Porter is a full of flavor beer with lots of dark tones, one will often taste the chocolate flavor within.',
        artist: "Kiana Girigorie",
        artistUrl:"http://instagram.com/kiana.girigorie",
        backgroundColor: '#59acda',
        labelImageUrl: './imgs/wide-label-drone.jpg',
        untappdId:'1234842',
        ABV: 5.8,
        beerType: 'Porter',
        hexImageUrl:'imgs/hexes/drone.png',
        order: 1
    },
    queenbee:{
        name:"Queen Bee",
        urlName:'queenbee',
        shortDesc: "The Queen Bee is a delicious dry hopped IPA (7.7% ABV) with a smooth citrus hoppy flavor. It has a yellow/orange color with a firm hoppy foam. The Queen Bee is an English style IPA with an American hop. We used a single hop, Cascade. The hop is used during the boil for bitterness, and during dry-hopping for aroma. It gives a nice, refreshing, fruity IPA with taste of grapefruit. ",
        longDesc: "Queen Bee is an India Pale Ale.\
\
India Pale Ale, abbreviated IPA is a style of beer within the category of Pale Ale. The beer was first brewed in England, destined for the London market in the 19th century. During the 17th century, England had many overseas colonies and the beer for the British soldiers and civilians was sent with ships to the other side of the world. A sailing vessel was on the road to India for nearly five months, far too long to keep normal beer. The English brewers in order to increase the shelf life of the beer, added more hops to the beer and increased the alcohol content of the beer. Hence, all the exported beer was heavily hopped, therefore was more bitter and higher in alcohol content. Thus India Ale, arose during the 18th century . India Pale Ale was created much later.\
\
IPA is a very popular craft beer and a beer to enjoy quietly and slowly.",
        artist: "Kiana Girigorie",
        artistUrl:"http://instagram.com/kiana.girigorie",
        backgroundColor: '#edefed',
        labelImageUrl: './imgs/wide-label-queenbee.jpg',
        untappdId:'1232681',
        ABV: 7.7,
        beerType: 'IPA',
        hexImageUrl:'imgs/hexes/queen-bee.png',
        order: 2 
    },
    worker:{
        name:"Worker",
        urlName:'worker',
        shortDesc: "Our tasty Imperial Saison, the Worker (9.4% ABV), is prickly sweet with some spiciness. The Worker has aroma notes of over-ripened peaches, dates, and stone fruit. The rye is very apparent and gives the beer a spicy floral taste.",
        longDesc: "Worker is an Imperial Saison.\
\
Saison is a Belgian type of beer (beer style) of top fermentation with an alcohol content of normally 5 to 6.5%. Saison is the French word for season because this is a seasonal beer. This beer was originally brewed in the winter by the farmers to be drunk by the seasonal workers in the harvest season. The Saison beer had to be brewed in the winter to prevent the beer would be bad during storage. Saison is originally a light, slightly acidic, dry (aftertaste), bitter, spicy/frutie beer, which was brewed during the winter to be drunk during the summer as a thirst quencher. Saisons are now brewed all year round.",
        artist: "Kiana Girigorie",
        artistUrl:"http://instagram.com/kiana.girigorie",
        backgroundColor: '#c0bbdc',
        labelImageUrl: './imgs/wide-label-worker.jpg',
        untappdId:'1372512',
        ABV: 9.4,
        beerType: 'Saison / Farmhouse Ale',
        hexImageUrl:'imgs/hexes/worker.png',
        order: 3
    },
    honeyblonde:{
        name:"Honey",
        urlName:'honeyblonde',
        shortDesc: "Nice, fruity blonde beer, the Honey has notes of lemon, orange and star anise. The Honey is strong and has a full body. The taste is light sweet and fresh bitter.",
        longDesc: "Honey is a Blonde.\
\
A Blonde is a beer with a golden yellow colour. Basically is a Blonde beer a beer of high fermentation. The taste of the beer is generally smooth. The light malts have usually not such a distinct flavor, so the flavor comes from the hops and the yeast.",
        artist: "Luna Bongers",
        artistUrl:"http://instagram.com/LunaBongers",
        backgroundColor: '#f5f0e7',
        labelImageUrl: './imgs/wide-label-honey.jpg',
        untappdId:'1372507',
        ABV: 7.9,
        beerType: 'Belgian Blonde',
        hexImageUrl:'imgs/hexes/honey.png',
        order: 4
    },
    smoker:{
        name:"Smoker",
        new:false,
        urlName:'smoker',
        shortDesc: "Smoker (5.4% ABV) is a subtle Rauchbier. It has a very clean smokiness with pleasant sweetness and complex flavours that come from the malt.",
        longDesc: "",
        artist: "Bernadette Leijdekkers",
        artistUrl:"http://www.leijdekkers.nl/",
        backgroundColor: '#5fb5bf',
        labelImageUrl: './imgs/wide-label-smoker.jpg',
        untappdId:'1549422',
        ABV: 5.4,
        beerType: 'Rauchbier',
        hexImageUrl:'imgs/hexes/smoker.png',
        order: 5
    },
    hive:{
        new:false,
        name:"Hive",
        urlName:'hive',
        shortDesc: "Hive (5,3% ABV) is a very fresh Hefeweizen. The Hive is made up of a lot of wheat which gives it a refreshing taste. It is cloudy and pale, with a foamy and frothy head. The taste is fruity and has some vanilla flavors. ",
        longDesc: "",
        artist: "Bernadette Leijdekkers",
        artistUrl:"http://www.leijdekkers.nl/",
        backgroundColor: '#c3dbe4',
        labelImageUrl: './imgs/wide-label-hive.jpg',
        untappdId:'1572399',
        ABV: 5.3,
        beerType: 'Hefeweizen',
        hexImageUrl:'imgs/hexes/hive.png',
        order: 6
    },
    drone2:{
        name:"Drone²",
        urlName:'drone2',
        shortDesc: "DroneÂ² (8.5% ABV) is an Imperial version of the Drone. We increased the ingredients to get more aromas of roasted malt, chocolate, caramel and coffee! And of course, the alcohol percentage increased with it.",
        longDesc: "",
        artist: "Kiana Girigorie",
        artistUrl:"http://instagram.com/kiana.girigorie",
        backgroundColor: '#59acda',
        labelImageUrl: './imgs/wide-label-drone2.jpg',
        untappdId:'1549431',
        ABV: 8.5,
        beerType: 'Imperial Porter',
        hexImageUrl:'imgs/hexes/drone2.png',
        order: 7
    },
    nectar:{
        name:"Nectar",
        urlName:'nectar',
        shortDesc: "Nectar (10.7% Abv.), our Barleywine, has a nice balance of malt and bitterness. The hops (Columbus, Chinook, Centennial, Simcoe, Amarillo) and malt work very well together.",
        longDesc: "",
        artist: "Cristiaan Lieverse",
        artistUrl:"http://www.christiaanlieverse.com/",
        backgroundColor: '#bcc5dc',
        labelImageUrl: './imgs/wide-label-nectar.jpg',
        untappdId:'1549433',
        ABV: 10.7,
        beerType: 'Barleywine',
        hexImageUrl:'imgs/hexes/nectar.png',
        order: 8
    },
    // test:{
    //     new:true,
    //     name:"New test",
    //     urlName:'test',
    //     shortDesc: "this is a made up beer",
    //     longDesc: "",
    //     artist: "",
    //     artistUrl:"http://thesistersbrewery.com/",
    //     backgroundColor: '#e7d3cc',
    //     labelImageUrl: './imgs/hexes/genericlabel.png',
    //     untappdId:'2008963',
    //     ABV: 0.0,
    //     beerType: 'Fake',
    //     hexImageUrl:'imgs/hexes/genericlabel.png',
    //     order: 9
    waggle:{
        new:false,
        name:"Waggle Dance",
        urlName:'waggle',
        shortDesc: "Waggle Dance is our new session IPA. Hoppy, spicy and full bodied with nice soft hoppy foam. Made with Nugget, Citra and Mosaic. Dry hopped with Citra and Mosaic",
        longDesc: "",
        artist: "Toto Stoffels",
        artistUrl:"https://www.instagram.com/totomatenplukker/",
        backgroundColor: '#68a29a',
        labelImageUrl: './imgs/WaggleDance-label.jpg',
        untappdId:'2008963',
        ABV: 4.4,
        beerType: 'Session IPA',
        hexImageUrl:'imgs/hexes/waggledance.png',
        order: 9
    },
    // abelha:{
    //     name:"Abelha",
    //     urlName:'abelha',
    //     new:true,
    //     shortDesc: "--",
    //     longDesc: "",
    //     artist: "  ",
    //     artistUrl:"",
    //     backgroundColor: '',
    //     labelImageUrl: './imgs/Abelha.jpg',
    //     untappdId:'1635987',
    //     order: 9
    // },
    bzzz:{
         name:"Bzzz",
         urlName:'bzzz',
         new:false,
         shortDesc: "Full bodied Doppelbock with a smooth malty finish.",
         longDesc: "Full bodied Doppelbock with a smooth malty finish.",
         artist: "Ward van Elk",
         artistUrl:"https://www.instagram.com/wardvanelk/",
         backgroundColor: '#f5f0e7',
         labelImageUrl: './imgs/bzzz.jpg',
         untappdId:'1750801',
         ABV: 8,
         beerType: 'Doppelbock',
         hexImageUrl:'imgs/hexes/bzzz.png',
         order: 10
     },
     apis:{
         name:"Apis",
         urlName:'apis',
         new:false,
         shortDesc: "Tripel brewed with grapefruit and honey from bees around the brewery. Soft and sweet fruity with a nice bitterness.",
         longDesc: "",
         artist: "Loes Faber",
         artistUrl:"https://www.loesfaber.com",
         backgroundColor: '#f1c020',
         labelImageUrl: './imgs/wide-label-Apis.jpg',
         untappdId:'2373007',
         ABV: 8.5,
         beerType: 'Tripel',
         hexImageUrl:'imgs/hexes/apis.png',
         order: 11
     },
     black:{
         name:"Black",
         urlName:'black',
         new:true,
         shortDesc: "Vanilla Zuidam Old Genever (5y On Oak) Milk Stout. Soft smooth Vanilla Milk Stout, Infused with Zuidam Old Genever aged 5 year on American oak. Before infusion we put the Madagascar vanilla beans for 2 months in the Old Genever. The taste is soft smooth with vanilla, toffee, oak and chocolate. We used for the Black and Yellow the same Stout with Lactose",
         longDesc: "",
         artist: "Anne Aimée Winkelhuis ",
         artistUrl:"https://hetwinkelhuis.nl/",
         backgroundColor: '#f5f0e7',
         labelImageUrl: './imgs/black.jpg',
         untappdId:'2395229',
         ABV: 10.5,
         beerType: 'Vanilla Old Genever Milk Stout',
         hexImageUrl:'imgs/hexes/black_hex.png',
         order: 12
	 },
     yellow:{
         name:"Yellow",
         urlName:'yellow',
         new:true,
         shortDesc: "Vanilla Zuidam Old Genever (12y On Oak) Milk Stout. Soft smooth Vanilla Milk Stout, Infused with Zuidam Old Genever aged 12 year on American oak. This Old Genever is rare and difficult to get in liquor stores. Before infusion we put the Madagascar vanilla beans for 2 months in the Old Genever. The taste is much softer and smoother then the Black.  The taste is very smooth with vanilla, toffee, oak and chocolate. We used for the Black and Yellow the same Stout with Lactose.",
         longDesc: "",
         artist: "Anne Aimée Winkelhuis ",
         artistUrl:"https://hetwinkelhuis.nl/",
         backgroundColor: '#f5f0e7',
         labelImageUrl: './imgs/yellow.jpg',
         untappdId:'2395233',
         ABV: 10.5,
         beerType: 'Vanilla Old Genever Milk Stout',
         hexImageUrl:'imgs/hexes/yellow_hex.png',
         order: 13
	 }
	
};