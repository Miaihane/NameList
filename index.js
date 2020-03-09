// const NAMES = ['mary', 'stacy', 'sam', 'samuel', 'sam', 'miguel'];
const NAMES = ["ghfd", "gcjbch", "j", "gagc", "bihjcac", "hfjc", "ijh", "gbcj", "bjeh", "efadgbagd", "agb", "fehgfg", "dhefcfehee", "ahig", "iedbejcag", "jcggejfae", "hbhchccgb", "g", "fj", "jajbh", "bbfjhhgh", "gfgd", "eibcjdjaii", "ajgdif", "bbfjiei", "ad", "e", "eehgd", "hf", "gcbhifhebi", "jhfdii", "bijg", "dddig", "e", "iijhhgeda", "ajcf", "afjeg", "ccehhfeibc", "jdgiacbaf", "ba", "fagegcfig", "ieh", "eag", "jja", "bdbbadead", "bjgjddiafg", "eaaegcg", "fgjihcic", "jgachgbdcb", "jjbejb", "h", "ihaeia", "cjgba", "cccaf", "cjacid", "aeajbjgcf", "ejjdg", "f", "c", "edfbhedbeg", "eccgebciij", "iii", "ididddi", "e", "gijagihj", "d", "dhdc", "fcgfihj", "aebaeih", "i", "cehjdjc", "dabhijbfe", "cfhejjefjd", "haibjj", "icfdejac", "b", "gcbcahdbbj", "f", "hheageh", "ificg", "g", "egcijga", "ababdhhc", "efcacja", "jefbadhiig", "e", "hgajhfj", "ifddidhj", "hihe", "ja", "iifiedhbdi", "j", "jjdcedhb", "cac", "hf", "he", "hb", "bh", "e", "i"];

function solve(names) {
    const output = [];
    const allPrefix = {};
    const handledNames = {};

    names.forEach(name => {
        if (name in handledNames) {
            handledNames[name] += 1;
            output.push(`${name} ${handledNames[name]}`);
        } else {
            handledNames[name] = 1;

            let tmpPrefix = '';
            let pushInOutput = true;

            const chars = name.split('');

            chars.forEach((char, idx) => {
                tmpPrefix += char;

                if (tmpPrefix in allPrefix) {
                    allPrefix[tmpPrefix] += 1;
                    if (chars.length === idx + 1) {
                        output.push(tmpPrefix);
                    }
                } else {
                    allPrefix[tmpPrefix] = 0;
                    if (pushInOutput) {
                        output.push(tmpPrefix);
                        pushInOutput = false;
                    }                    
                }
            });
        }
    });

    names = [...output];
    return names;
}

function main() {
    const res = solve(NAMES);
    console.log((res || []).join('\n'));
}

main()