const NAMES = ['alfred', 'alfie', 'alfie'];

function solve(names) {
    const handleJoinMember = (groupMember = []) => {
        const handledNames = [];
        const outPut = [];
        groupMember.forEach(memberName => {
            const prefix = getPrefix(memberName, handledNames);
            handledNames.push(memberName);
            if (!outPut.includes(prefix)) {
                outPut.push(prefix);
            }
        });
        return outPut;
    }

    const getPrefix = (object = '', handledNames = []) => {
        if (handledNames.length === 0) {
            return object[0];
        }
        const existedTime = handledNames.filter(name => name === object).length;
        if (existedTime > 0) {
            return `${object} ${existedTime + 1}`;
        }
        let finalPrefix = '';
        handledNames.forEach(name => {
            const tmpPrefix = findingCommonPrefix(object, name);
            if (tmpPrefix.length > finalPrefix.length) {
                finalPrefix = tmpPrefix;
            }
        });
        return finalPrefix;
    }

    const findingCommonPrefix = (source = '', destination = '') => {
        const len = source.length > destination.length ? destination.length : source.length;
        let result = '';
        for (let i = 0; i < len; i += 1) {
            result += source[i];
            if (source[i] !== destination[i]) {
                break;
            }
        }
        return result;
    }
    
    names = handleJoinMember(NAMES);
    return names;
}

function main() {
    const res = solve(NAMES);
    console.log((res || []).join('\n'));
}

main()