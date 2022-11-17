import React from 'react';

interface BaseDocType extends React.HTMLAttributes<HTMLElement> {
    title: string;
    // children?: JSX.Element | JSX.Element[] | string | string[];
    children?: any | any[];
};

interface LangTypes extends React.HTMLAttributes<HTMLElement> {
    type?: "details" | "select";
};

interface RulesDocType extends BaseDocType {
    completeTitle?: string;
};

export type { BaseDocType, LangTypes, RulesDocType };
