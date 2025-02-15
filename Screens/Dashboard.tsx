import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React,{useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetBookApi from './GetBookApi';
import { storeBooks } from './BookSlice';

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
const prideAndPrejudice = require('../assets/prideandprejustice.jpeg')



const booksCollection = [
    {
        name: "The Kite Runner",
        author: "Khaled Hosseini",
        cover: theKiteRunner,
        genre: "Historical Fiction",
        price: "$9.99",
        excerpt: "The Kite Runner tells the story of Amir, a young boy from a wealthy family in Kabul, and his complicated relationship with Hassan, the son of his father's servant."
    },
    {
        name: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        cover: thousandSplendidSuns, // Replace with actual cover URL
        genre: "Historical Fiction",
        price: "$12.99",
        excerpt: "A Thousand Splendid Suns spans over thirty years, beginning in the 1970s. It tells the poignant story of two women, Mariam and Laila, and the deep bond they form through hardship."
    },
    {
        name: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        cover: crimeAndPunishment, // Replace with actual cover URL
        genre: "Psychological Fiction",
        price: "$8.99",
        excerpt: "Crime and Punishment is the story of Rodion Raskolnikov, a young student in St. Petersburg who commits a crime and struggles with guilt and psychological torment."
    },
    {
        name: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        cover: brothersKaramazov, // Replace with actual cover URL
        genre: "Philosophical Fiction",
        price: "$14.99",
        excerpt: "The Brothers Karamazov is a story of three brothers, each representing different philosophies of life, and their exploration of morality, free will, and faith."
    },
    {
        name: "War and Peace",
        author: "Leo Tolstoy",
        cover: warAndPeace, // Replace with actual cover URL
        genre: "Historical Fiction",
        price: "$19.99",
        excerpt: "War and Peace is a sweeping epic that covers the Napoleonic wars, exploring themes of love, betrayal, and the human condition through a large ensemble of characters."
    },
    {
        name: "Anna Karenina",
        author: "Leo Tolstoy",
        cover: annaKrenina, // Replace with actual cover URL
        genre: "Literary Fiction",
        price: "$13.99",
        excerpt: "Anna Karenina is a tragic story of a woman trapped in a loveless marriage, whose affair with Count Vronsky ultimately leads to her downfall."
    },
    {
        name: "The Alchemist",
        author: "Paulo Coelho",
        cover: theAlchemist, // Replace with actual cover URL
        genre: "Philosophical Fiction",
        price: "$7.99",
        excerpt: "The Alchemist is the story of Santiago, a shepherd boy who embarks on a journey to find treasure and, in doing so, discovers the true meaning of life."
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: greatGastby, // Replace with actual cover URL
        genre: "Classic Fiction",
        price: "$10.99",
        excerpt: "The Great Gatsby tells the story of Jay Gatsby, a wealthy and mysterious man who is in love with Daisy Buchanan, in a tale of love, obsession, and disillusionment."
    },
    {
        name: "1984",
        author: "George Orwell",
        cover: image1984, // Replace with actual cover URL
        genre: "Dystopian Fiction",
        price: "$6.99",
        excerpt: "1984 is set in a totalitarian society governed by 'Big Brother.' It explores themes of surveillance, propaganda, and the loss of individuality."
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        cover: prideAndPrejudice, // Replace with actual cover URL
        genre: "Romantic Fiction",
        price: "$5.99",
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
                <Text style={styles.plot}>"{data.excerpt}"</Text>
            </View>




        </View>
    )
}


const Dashboard = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)

    dispatch(storeBooks(booksCollection));


    const { booksData } = useSelector((state: any) => state.books);
    console.log('Books data in dashborad : ', booksData)

    return (
        <LinearGradient
            colors={['#ffffff', '#8402FDFF']}
            style={styles.gradient}
        >
            <View>
                <View style={styles.header}>
                    <Image source={book} style={styles.image}></Image>
                    <Text style={{
                        color: '#000000',
                        fontSize: 30, fontWeight: '700',
                        marginTop: 30, marginLeft: 5
                    }}>Bookishhh...</Text>
                </View>
                <View style={{ width: 350, height: 3, backgroundColor: '#000000', alignSelf: 'center' }}></View>
            </View>
            <View >
                <TouchableOpacity onPress={()=>setVisible(!visible)}>
                    <Text style={{ fontSize: 20, fontWeight: '700', padding: 10, alignSelf: 'center', backgroundColor: '#8402FDFF', marginVertical: 50, color: '#ffffff', borderRadius: 20 }}>get books</Text>
                </TouchableOpacity>



            </View>
            {visible && <FlatList
                data={booksData}
                renderItem={({ item }) => <Card data={item}></Card>}
            >

            </FlatList>}

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'


    },
    image: {
        width: 70,
        height: 80,

    },
    card: {
        padding: 20,
        marginBottom: 20,
        margin: 10,
        backgroundColor: '#C891E7FF',
        borderRadius: 20



    },
    cover: {
        width: 'auto',
        borderWidth : 2,
        borderColor : '#ffffff',
        
    },
    text: {
        flexDirection : 'column',
        alignItems : 'center'
    
    },
    name : {
        fontSize : 20,
        fontWeight : '700',
        color : '#2297B4FF'
    },
    author : {
        fontSize : 18,
        fontWeight : '700',
        color : '#6E5424FF'
    },
    plot : {
      textAlign : 'justify',
      fontSize : 17,
      fontWeight : '400',
      color : '#000000FF'

    }

})

export default Dashboard