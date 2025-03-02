

const Footer: React.FC = () => {
    return (
      <footer style={{ background: "#65abab",  color: '#fff', padding: '23px', textAlign: 'center' }}>
        <hr style= {{color: "#2f6e6e",border: "1px solid #2f6e6e", maxWidth: "70%"}}></hr>
        <p>&copy; {new Date().getFullYear()} Website for henhacks. All rights reserved or whateva.</p>
      </footer>
    );
  };
  
  export default Footer;