const Footer = () => {
    return (
        <footer id="footer" style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div><img src="logo.png" width="70px" style={{ 'margin-top': '40px' }} alt="Odyssey Logo" /> </div>
            <div style={{ 'padding': '20px', display: 'flex', 'justify-content': 'space-between', 'flex-direction': 'column' }}>
                <div></div>
                <div>
                    <h5>Copyright © 2023 | All Rights Reserved</h5>
                </div>
            </div>
            <div style={{ 'padding': '20px' }}>
                <p style={{ 'text-align': 'right', fontSize: 'small' }} >
                    Odyssey<br />
                    Your Holiday Vacation Companion
                </p>
            </div>
        </footer>
    )
}

export default Footer