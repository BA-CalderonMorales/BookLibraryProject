import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer class="text-center text-lg-end bg-light text-muted">
            <section 
            class="d-flex justify content-center justify-content-lg-between border-bottom">
                {/* Left */}
                <div class="me-5 d-none d-lg-block">
                    <span>Brandon A. Calderon-Morales | Copyright &copy; 2021</span>
                </div>
            </section>
        </footer>
    )
}

export default Footer;