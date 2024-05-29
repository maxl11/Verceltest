import React from 'react';
import './styles.css'

const Page: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">Willkommen Kevin und Max!</h1>
            <p className="subtitle">Schön, dass du hier bist.</p>
            <button className="button">Klicke mich an!</button>
        </div>
    );
}

export default Page;