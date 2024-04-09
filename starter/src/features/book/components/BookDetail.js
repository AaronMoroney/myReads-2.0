import '../../../css/App.css'
import Alert from '../../alert/components/Alert';
import { Selector } from '../../selector';
import { useAlert } from '../../alert/hooks/useAlert';

const BookDetail = ({ properties }) => {
    const { showAlert, isVisible } = useAlert();

    return (
        <>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${properties.imageLinks.smallThumbnail}")`
                        }}
                    /> 
                    <div>
                        <Selector 
                            properties={properties}
                            showAlert={showAlert}
                        />
                    </div>       
                </div>
                <div className="book-title">
                    {properties.title}
                </div>
                <div className="book-authors">
                    {properties.authors}
                </div>
                {/* some other info */}
                <div className="book-authors">
                    {properties.pageCount} pages
                </div>
                <div className="book-authors">
                    published by {properties.publisher}
                </div>
                <Alert 
                    title={properties.title}
                    shelf={properties.shelf}
                    isVisible={isVisible}
                />
            </div>    
        </>
    )
}

export default BookDetail