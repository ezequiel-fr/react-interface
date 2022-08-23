import React from 'react';
import getParams from './getParams';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import vars from '../../constants/website.json';

import { BaseDocType } from '../../../types/InterfaceTypes';

const Base: React.FC<BaseDocType> = ({ ...params }) => {
    React.useEffect(() => {
        // Title
        var pageTitle = String(params.title || '');

        if (pageTitle.length)
            pageTitle = `${pageTitle}${vars.separator || " - "}${vars.name}`

        document.title = pageTitle;

        // On start
        window.scrollTo(0, 0);
    }, [params]);

    return (
        <>
            <Header />

            <main {...getParams(params)}>
                {params.children instanceof Array ? params.children.map(a => a) : params.children}
            </main>

            <Footer />
        </>
    );
};

export default Base;
