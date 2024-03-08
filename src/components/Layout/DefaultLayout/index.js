import Header from '~/components/Layout/components/Header';
import Info from './Info';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Info />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
