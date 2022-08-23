import React from 'react';

import Base from '../Base';

import getParams from './getParams';

import { RulesDocType } from '../../../types/InterfaceTypes';

const Rules: React.FC<RulesDocType> = ({ ...params }) => {
    return (
        <Base title={params.title || "Doc"} { ...getParams(params) }>
            <div className="title">
                <h1>{params.completeTitle || ""}</h1>
            </div>

            <div className="container">
                {params.children instanceof Array
                    ? params.children.map(a => a)
                    : params.children
                }
            </div>
        </Base>
    );
};

export default Rules;
