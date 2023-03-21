import useDocumentTitle from '../../helpers/useDocumentTitle';
import Hero from './Hero';
import Introduction from './Introduction';
import { Fab } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export default function About() {
    useDocumentTitle('About Us');
    return (<>
        <Hero />
        <Introduction />
        {/**
         *         <Fab 
            color="primary" 
            variant="extended" 
            aria-label='add'
            href="/Merchant"    
            sx = {{
                position: "fixed",
                bottom: "15px",
                right: "15px",
            }}
        >
            <PersonAddIcon sx={{ mr: 1 }} />
            Trở thành đối tác
        </Fab>
         */}
    </>)
}