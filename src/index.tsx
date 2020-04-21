import React from 'react';

interface HeaderProps {
    text: string
}


export const HeaderComponent: React.FC<HeaderProps> = ({ text }) => (
    <div>{text}</div>
)