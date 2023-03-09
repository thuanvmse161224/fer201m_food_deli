import useDocumentTitle from '../../helpers/useDocumentTitle';
import Hero from './Hero';
import Introduction from './Introduction';

export default function About() {
    useDocumentTitle('About Us');
    return (<>
        <Hero />
        <Introduction />
    </>)
}