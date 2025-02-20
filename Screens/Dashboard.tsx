import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ImageBackground,
    Animated,
    TextInput,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import React, { useState, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetBookApi from './GetBookApi';
import { storeBooks } from './BookSlice';
import { slides } from './SlidesData';
import { SearchBar } from 'react-native-screens';
const home = require('../assets/right.png')
const book = require('../assets/book.png');
const theKiteRunner = require('../assets/tkr.jpeg')
const thousandSplendidSuns = require('../assets/tss.jpeg')
const crimeAndPunishment = require('../assets/cap.jpeg')
const brothersKaramazov = require('../assets/tbk.jpeg')
const warAndPeace = require('../assets/wap.jpeg')
const annaKrenina = require('../assets/ak.jpeg')
const theAlchemist = require('../assets/ta.jpeg')
const greatGastby = require('../assets/tggatsby.jpeg')
const image1984 = require('../assets/1984.jpeg')
const prideAndPrejudice = require('../assets/prideandprejustice.jpeg');
const arrow = require('../assets/right-arrow.png')
const search = require('../assets/search.png')
const downarrow = require('../assets/arrow-down.png');

import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');


const booksCollection = [
    {
        name: "The Kite Runner",
        author: "Khaled Hosseini",
        cover: theKiteRunner,
        genre: "Historical Fiction",
        price: "$9.99",
        excerpt: "The Kite Runner tells the story of Amir, a young boy from a wealthy family in Kabul, and his complicated relationship with Hassan, the son of his father's servant.",
        screen: 'KiteRunner'
    },
    {
        name: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        cover: thousandSplendidSuns,
        genre: "Historical Fiction",
        price: "$12.99",
        excerpt: "A Thousand Splendid Suns spans over thirty years, beginning in the 1970s. It tells the poignant story of two women, Mariam and Laila, and the deep bond they form through hardship.",
        screen: 'KiteRunner'
    },
    {
        name: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        cover: crimeAndPunishment,
        genre: "Psychological Fiction",
        price: "$8.99",
        screen: 'KiteRunner',
        excerpt: "Crime and Punishment is the story of Rodion Raskolnikov, a young student in St. Petersburg who commits a crime and struggles with guilt and psychological torment."
    },
    {
        name: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        cover: brothersKaramazov,
        genre: "Philosophical Fiction",
        price: "$14.99",
        screen: 'KiteRunner',
        excerpt: "The Brothers Karamazov is a story of three brothers, each representing different philosophies of life, and their exploration of morality, free will, and faith."
    },
    {
        name: "War and Peace",
        author: "Leo Tolstoy",
        cover: warAndPeace,
        genre: "Historical Fiction",
        price: "$19.99",
        screen: 'KiteRunner',
        excerpt: "War and Peace is a sweeping epic that covers the Napoleonic wars, exploring themes of love, betrayal, and the human condition through a large ensemble of characters."
    },
    {
        name: "Anna Karenina",
        author: "Leo Tolstoy",
        cover: annaKrenina,
        genre: "Literary Fiction",
        price: "$13.99",
        screen: 'KiteRunner',
        excerpt: "Anna Karenina is a tragic story of a woman trapped in a loveless marriage, whose affair with Count Vronsky ultimately leads to her downfall."
    },
    {
        name: "The Alchemist",
        author: "Paulo Coelho",
        cover: theAlchemist,
        genre: "Philosophical Fiction",
        price: "$7.99",
        screen: 'KiteRunner',
        excerpt: "The Alchemist is the story of Santiago, a shepherd boy who embarks on a journey to find treasure and, in doing so, discovers the true meaning of life."
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: greatGastby,
        genre: "Classic Fiction",
        price: "$10.99",
        screen: 'KiteRunner',
        excerpt: "The Great Gatsby tells the story of Jay Gatsby, a wealthy and mysterious man who is in love with Daisy Buchanan, in a tale of love, obsession, and disillusionment."
    },
    {
        name: "1984",
        author: "George Orwell",
        cover: image1984,
        genre: "Dystopian Fiction",
        price: "$6.99",
        screen: 'KiteRunner',
        excerpt: "1984 is set in a totalitarian society governed by 'Big Brother.' It explores themes of surveillance, propaganda, and the loss of individuality."
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        cover: prideAndPrejudice,
        genre: "Romantic Fiction",
        price: "$5.99",
        screen: 'KiteRunner',
        excerpt: "Pride and Prejudice is a classic romance about Elizabeth Bennet and her complex relationship with the wealthy, aloof Mr. Darcy."
    }
];

type cardProps = {
    data: typeof booksCollection[0];
}

const Card: React.FC<cardProps> = ({ data }) => {
    return (
        <View style={styles.card}>
            <Image source={data.cover} style={styles.cover}></Image>
            <View style={styles.text}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.author}>{data.author}</Text>
                {/* <Text style={styles.plot}>"{data.excerpt}"</Text> */}
            </View>
        </View>
    )
}

type caraousleProps = {
    data: {
        id: string,
        image: any
    }
}

const Excerpt: React.FC<cardProps> = ({ data }) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={data.cover}
            style={{
                width: 150,
                height: 200,
                marginHorizontal: 15,
                marginVertical: 10,
                justifyContent: 'flex-end',
                // borderWidth: 2,
                // borderColor: '#ffffff',
                // borderBottomWidth: 0

            }} resizeMode='cover'>

            <View style={{
                width: '100%',
                height: '30%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                marginTop: 20,
                paddingBottom: 10,


            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                }} onPress={() => navigation.navigate(data.screen, { cover: data.cover, excerpt: data.excerpt, name: data.name })}>
                    <Text style={{

                        fontSize: 18,
                        fontWeight: '500',
                        color: '#ffffff'
                    }}>
                        Read excerpt
                    </Text>
                    <Image source={arrow} style={{
                        width: 20,
                        height: 20,
                        tintColor: '#ffffff',
                        marginHorizontal: 8
                    }}></Image>
                </TouchableOpacity>


            </View>

        </ImageBackground>
    )
}

const Carousle: React.FC<caraousleProps> = ({ data }) => {
    //console.log("Data : ", data)
    return (
        <View style={styles.carousle}>

            <ImageBackground source={data.image} style={styles.carousleImage}>
                <View style={styles.carousleBottom}>
                    <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 20, marginLeft: 15 }}>Get book</Text>
                    <Image source={arrow} style={{ width: 25, height: 25, tintColor: '#ffffff', marginRight: 15 }}></Image>

                </View>
            </ImageBackground>


        </View>
    )
}

import { DrawerScreenProps } from "@react-navigation/drawer";
type DrawerParamList = {
    Dashboard: any; 
};

type HomeScreenProps = DrawerScreenProps<DrawerParamList, "Dashboard">;


const Dashboard = ({navigation} : HomeScreenProps) => {




    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [theme, setTheme] = useState('transparent');
    const [buttonColor, setButtonColor] = useState('#000000');
    const [searchTint, setSearch] = useState('#000000');
    const [text, setText] = useState('Dark')
    const dispatch = useDispatch();

    const indicatorColor = {
        backgroundColor: searchTint,
        width: 50
    }


    dispatch(storeBooks(booksCollection));



    const { booksData } = useSelector((state: any) => state.books);
    //console.log('Books data in dashborad : ', booksData);
    //console.log("Data : ", slides);

    // Function to scroll to the next item
    const scrollToNext = () => {


        const nextIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;

        setCurrentIndex(nextIndex); // Update state

        //console.log("Flatlist current : ",flatListRef.current)
        // console.log("Current Index : ",currentIndex);
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: nextIndex });
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollToNext, 2000); // Scroll every 2 seconds

        // Cleanup the interval on unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <LinearGradient
            colors={[theme, '#042230FF']}
            locations={[0.05, 1]}
            style={styles.gradient}

        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    margin: 10,
                    marginBottom: 0,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer() }>
                    <Image source={home} style={{ width: 40, height: 30, marginHorizontal: 0, tintColor: searchTint }}></Image>
                    </TouchableOpacity>
                    <Text style={{
                        color: searchTint,
                        fontSize: 17,
                        fontWeight: '600',
                        marginHorizontal: 60
                    }}>Which kind of book do you want?</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#C02B06FF' }}>Theme</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setTheme(prevTheme => prevTheme == 'transparent' ? '#000000' : 'transparent'),
                                    setButtonColor(prevColor => prevColor == '#000000' ? '#999' : '#000000'),
                                    setSearch(prevColor => prevColor == '#000000' ? '#ffffff' : '#000000')
                                setText(prevText => prevText == 'Dark' ? 'Light' : 'Dark')
                            }}
                        ><Text style={{
                            padding: 5,
                            alignSelf: 'center',
                            backgroundColor: buttonColor,
                            color: '#ffffff',
                            fontWeight: '500',
                            fontSize: 17,
                            borderRadius: 20

                        }}>{text}</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TextInput style={{
                            width: 250,
                            borderColor: '#a9def9',
                            borderWidth: 2, borderRadius: 20,
                            height: 43,
                            paddingLeft: 40,
                            paddingTop: 10,
                            fontSize: 20,
                            color: searchTint,
                            


                        }} placeholder='search'  placeholderTextColor={searchTint}></TextInput>
                        <Image source={search}
                            style={{
                                width: 25,
                                height: 25,
                                position: 'absolute',
                                top: 9,
                                left: 10,
                                tintColor: searchTint

                            }}
                        ></Image>
                    </View>

                </View>
                <View>
                    <FlatList
                        ref={flatListRef}
                        data={slides}
                        renderItem={({ item }) => <Carousle data={item} />}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        decelerationRate="fast"  // Make the sliding speed fast (smooth scrolling)
                        snapToInterval={width}  // Snap each slide to the screen width (so it slides exactly one per swipe)
                        snapToAlignment="center"  // Align each slide to the start
                        nestedScrollEnabled
                        bounces={false}
                    >

                    </FlatList>
                    <View style={{ flexDirection: 'row', width: '50%', marginHorizontal: 100, justifyContent: 'space-evenly' }}>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 0) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 1) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 2) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 3) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 4) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 5) && indicatorColor]}></View>
                        <View style={[{ width: 20, height: 5, backgroundColor: '#adb5bd', borderRadius: 90 }, (currentIndex == 6) && indicatorColor]}></View>
                    </View>

                    {/*ruler */}
                    <View style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: searchTint,
                        marginVertical: 8,
                        marginBottom: 2
                    }}></View>


                </View>

                <View style={{
                    width: 'auto', height: 200,
                    margin: 5, borderRadius: 15,
                    padding: 5,
                    backgroundColor: '#A5C9CAFF',
                    borderColor: '#ACDDF4FF',
                    borderWidth: 2
                }}>
                    <FlatList
                        data={booksData}
                        renderItem={({ item }) => <Card data={item}></Card>}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                    >

                    </FlatList>
                    <Image source={downarrow} style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        top: 158,
                        left: 160,
                        tintColor: '#ffffff'
                    }}></Image>
                </View>

                {/* ruler */}
                <View style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: searchTint,
                    marginVertical: 8,
                    marginBottom: 2
                }}></View>

                <View>
                    <Text style={{
                        padding: 0, marginLeft: 20, fontSize: 19,
                        fontWeight: '700',
                        letterSpacing: 0.5,
                        color: '#e09f3e',

                    }}>Categories</Text>
                    <View style={styles.categories}>

                        <View style={styles.category}>
                            <Image source={image1984} style={styles.categoryImage}></Image>
                            <Text style={styles.categoryText}>History</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={brothersKaramazov} style={styles.categoryImage}></Image>
                            <Text style={styles.categoryText}>Fiction</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={theAlchemist} style={styles.categoryImage}></Image>
                            <Text style={styles.categoryText}>Poetry</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={warAndPeace} style={styles.categoryImage}></Image>
                            <Text style={styles.categoryText}>Science</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={annaKrenina} style={styles.categoryImage}></Image>
                            <Text style={styles.categoryText}>Hindi</Text>
                        </View>


                    </View>

                </View>

                {/* ruler */}
                <View style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: searchTint,
                    marginVertical: 8,
                    marginBottom: 2
                }}></View>

                <Text style={{
                    padding: 0, marginLeft: 20, fontSize: 19,
                    fontWeight: '700',
                    letterSpacing: 0.5,
                    color: '#e09f3e',
                }}>Excerpts</Text>
                <View style={{
                    margin: 10,
                    padding: 8, flex: 1,
                    marginHorizontal: 8,
                    backgroundColor: '#A5C9CAFF',
                    borderRadius: 20,
                    height: 350


                }}>

                    <FlatList
                        data={booksData}
                        renderItem={({ item }) => (<Excerpt data={item}></Excerpt>)}
                        numColumns={2}
                        contentContainerStyle={styles.container}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                    >


                    </FlatList>
                </View>
                <View style={{
                   flexDirection : 'row',
                   justifyContent : 'center'
                }}>
                    <ActivityIndicator size='large' color='#219ebc'></ActivityIndicator>
                </View>

            </ScrollView>

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        flexGrow: 1
    },
    gradient: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center'


    },
    image: {
        width: 50,
        height: 50,

    },
    card: {
        padding: 10,
        marginBottom: 5,
        margin: 2,
        backgroundColor: '#ffb703',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflow: 'hidden',





    },
    cover: {
        width: 150,
        height: 80,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#6CD4EEFF',
        marginRight: 10

    },
    text: {
        flexDirection: 'column',
        flexWrap: 'wrap'


    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff'
    },
    author: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000'
    },
    plot: {
        textAlign: 'justify',
        fontSize: 17,
        fontWeight: '400',
        color: '#F1EBEBFF'

    },
    carousle: {
        height: 250, // You can adjust the height
        width: 360,
        backgroundColor: 'transparent',
        marginVertical: 5,
        marginHorizontal: 18.5,
        borderRadius: 20, // Apply borderRadius to the parent container
        overflow: 'hidden', // Make sure the image respects the borderRadius
        marginTop: 0,

    },
    carousleImage: {
        width: 360,
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',

    },
    carousleBottom: {
        width: '100%',
        height: '15%',
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5


    },
    ruler: {
        width: '100%',
        height: 1,
        backgroundColor: '#03242CFF',
        marginVertical: 8,
        marginBottom: 2
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#A5C9CAFF',
        margin: 5,
        borderRadius: 10,
        paddingTop: 7,
        borderWidth: 2,
        borderColor: '#ACDDF4FF'


    },
    categoryImage: {
        width: 42,
        height: 42,
        borderWidth: 2.5,
        borderColor: '#432818',

    },
    categoryText: {
        fontWeight: '900',
        fontSize: 17,
        color: '#000000'
    },
    category: {
        alignItems: 'center'
    }


})

export default Dashboard