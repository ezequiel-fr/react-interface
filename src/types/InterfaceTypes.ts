import React from 'react';

interface BaseDocType extends React.HTMLAttributes<HTMLElement> {
    title: string;
    // children?: JSX.Element | JSX.Element[] | string | string[];
    children?: any | any[];
};

interface RulesDocType extends BaseDocType {
    completeTitle?: string;
};

export type { BaseDocType, RulesDocType };
