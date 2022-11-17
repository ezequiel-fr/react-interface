import { FC } from 'react';
import { LangTypes } from '../../types/InterfaceTypes';

import { useEffect } from 'react';

import checkDevice from '../../controllers/check-device';
import { getCookie } from '../../controllers/cookies';
import { changeLanguage } from '../../controllers/lang';

const Lang: FC<LangTypes> = ({ type = 'select' }) => {
    const getFlag = (name: string): string => {
        const mobileFormat = function () {
            let chars = "abcdefghijklmnopqrstuvwxyz",
                _chars = name.toLowerCase().split(''),
                search = _chars.map(a => /\^|\$/gi.test(a) ? '' : chars.search(a));

            return search.map(a => (a === -1 || typeof a === 'string') ? '' : `&#${a+127462};`).join('');
        };

        return checkDevice() ? `${name} ${mobileFormat()}` : name;
    };

    useEffect(() => {
        if (type === 'details') {
            // 
        } else {
            const select: HTMLSelectElement | null = document.querySelector('select.App-lang');
            var options: Array<{selector: HTMLOptionElement, value: string}> = [];

            select?.querySelectorAll('option').forEach(a => options.push({ selector: a, value: a?.value }));

            options.forEach(a => a.selector.removeAttribute('selected'));
            options.find(a => a.value === getCookie('_lang'))?.selector.setAttribute('selected', 'true');

            select?.addEventListener('change', () => {
                changeLanguage(select.options[select.selectedIndex]);
                window.location.reload();
            });
        }
    }, [type]);

    return type === 'details' ? (
        <>details</>
    ) : (
        <select className="App-lang" name="lang">
            <option value="en" dangerouslySetInnerHTML={{ __html: getFlag('EN') }}></option>
            <option value="fr" dangerouslySetInnerHTML={{ __html: getFlag('FR') }}></option>
        </select>
    );
};

export default Lang;
