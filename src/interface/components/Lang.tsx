import React from 'react';

import checkDevice from '../../controllers/check-device';
import { getCookie } from '../../controllers/cookies';
import { changeLanguage } from '../../controllers/lang';

const Lang: React.FC = () => {
    React.useEffect(() => {
        const select: HTMLSelectElement | null = document.querySelector('select.App-lang');
        var options: Array<{selector: HTMLOptionElement, value: string}> = [];

        select?.querySelectorAll('option').forEach(a => options.push({ selector: a, value: a?.value }));

        options.forEach(a => a.selector.removeAttribute('selected'));
        options.find(a => a.value === getCookie('_lang'))?.selector.setAttribute('selected', 'true');

        select?.addEventListener('change', () => {
            changeLanguage(select.options[select.selectedIndex]);
            window.location.reload();
        });
    });

    return (
        <select className="App-lang" name="lang">
            <option value="en">
                EN {checkDevice() && (<>: &#127468;&#127463;</>)}
            </option>
            <option value="fr">
                FR {checkDevice() && (<>: &#127467;&#127479;</>)}
            </option>
        </select>
    )
};

export default Lang;
