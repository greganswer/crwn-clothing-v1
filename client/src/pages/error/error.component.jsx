import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageTitle,
    ErrorImageText
} from './error.styles';

const ErrorPage = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png' />
        <ErrorImageTitle>Oh no! We tripped up!</ErrorImageTitle>
        <ErrorImageText>
            You had been told you should always check your shoes before getting up from the bleachers. Freshman were known to walk under them and tie peoples’ shoes together.
        </ErrorImageText>
    </ErrorImageOverlay>
);

export default ErrorPage;
