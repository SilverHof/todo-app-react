import './scss/styles.scss';
import Favicon from 'react-favicon';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <>
            <Favicon url=''></Favicon>
            
            <Header />
                
            <Footer />
        </>
    );
};


export default App;