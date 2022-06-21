import '../App.css';
import Cat from "./cat";

const img1 = 'https://images.all-free-download.com/images/graphicwebp/cat_small_cat_cats_eye_214515.webp';
const img2 = 'https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_240527.webp';
const img3 = 'https://images.all-free-download.com/images/graphicwebp/hangover_cat_breed_cat_237507.webp';
const img4 = 'https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_236797.webp';


function App() {

    return (
        <div className="App">
            <Cat age={'2'}
                 img={img1}/>

            <Cat name={'Caty'} age={'2'}
                 img={img2}/>

            <Cat name={'Caty2'} age={'4'}
                 img={img3}/>

            <Cat name={'Caty3'} age={'5'}
                 img={img4}/>
        </div>

    );
}

export default App;
