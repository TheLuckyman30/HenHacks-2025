

const Footer: React.FC = () => {
    return (
      <footer style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Website for henhacks. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;