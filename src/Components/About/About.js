import './About.css';
import Background from  '../.././Assests/bimage.jpg';

function About() {
    return (
        <div>
            <div>
                <div className="img-container">
                    <img className="about-image" src={Background} alt="book"/>
                    <h1 className="top-left">Welcome to <br /> Library Management System</h1>
                </div>
                <p>Online library management project in spring and hibernate is complete solution for all the manual problem that we
                    face during library management. Mainly there are 2 main actor of the application going to operate the application.
                    <b>1)Admin/Librarian and 2) User/Students.</b> <br />
                    Book or Digital books is the main module of the library management system. Book are assets that we are storing in
                    the database with some details like name, author name and version and a PDF format. So admin can perform crud
                    operation and issued the booked to users
                </p>
            </div>
        </div>);
}

export default About;