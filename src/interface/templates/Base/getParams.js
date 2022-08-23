// eslint-disable-next-line import/no-anonymous-default-export
export default function (params) {
    var props = {};

    Object
        .keys(params)
        .filter(a => !(
            a === 'title' || a === 'children'
        ))
        .forEach(a => props[a] = params[a])

    return props;
};
