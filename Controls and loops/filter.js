const coding = ['js', 'swift', 'python', 'java', 'cpp']

const values = coding.filter((item)=>{
    if(item.length > 3)return true;
    else return false;
})

const names = [];

coding.forEach((item)=>{
    names.push(item.toUpperCase());
})


// console.log(names)

const data = [
    {
        "name": "Adeel Solangi",
        "language": "Sindhi",
        "id": "V59OF92YF627HFY0",
        "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
        "version": 6.1
        },
        {
        "name": "Afzal Ghaffar",
        "language": "Sindhi",
        "id": "ENTOCR13RSCLZ6KU",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 1.88
        },
        {
        "name": "Aamir Solangi",
        "language": "Sindhi",
        "id": "IAKPO3R4761JDRVG",
        "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
        "version": 7.27
        },
        {
        "name": "Abla Dilmurat",
        "language": "Uyghur",
        "id": "5ZVOEPMJUI4MB4EN",
        "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
        "version": 2.53
        },
        {
        "name": "Adil Eli",
        "language": "Uyghur",
        "id": "6VTI8X6LL0MMPJCC",
        "bio": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
        "version": 6.49
        },
        {
        "name": "Adile Qadir",
        "language": "Uyghur",
        "id": "F2KEU5L7EHYSYFTT",
        "bio": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
        "version": 1.9
        },
        {
        "name": "Abdukerim Ibrahim",
        "language": "Uyghur",
        "id": "LO6DVTZLRK68528I",
        "bio": "Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.",
        "version": 5.9
        },
        {
        "name": "Adil Abro",
        "language": "Sindhi",
        "id": "LJRIULRNJFCNZJAJ",
        "bio": "Etiam malesuada blandit erat, nec ultricies leo maximus sed. Fusce congue aliquam elit ut luctus. Etiam malesuada blandit erat, nec ultricies leo maximus sed. Cras dictum dolor lacinia lectus vehicula rutrum. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero.",
        "version": 9.32
        },
        {
        "name": "Afonso Vilarchán",
        "language": "Galician",
        "id": "JMCL0CXNXHPL1GBC",
        "bio": "Fusce eu ultrices elit, vel posuere neque. Morbi ac tellus erat. Nunc tincidunt laoreet laoreet.",
        "version": 5.21
        },
        {
        "name": "Mark Schembri",
        "language": "Maltese",
        "id": "KU4T500C830697CW",
        "bio": "Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Morbi ultricies consequat ligula posuere eleifend. Vivamus id faucibus velit, id posuere leo. Sed laoreet posuere sapien, ut feugiat nibh gravida at. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
        "version": 3.17
        },
        {
        "name": "Antía Sixirei",
        "language": "Galician",
        "id": "XOF91ZR7MHV1TXRS",
        "bio": "Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Morbi finibus dui sed est fringilla ornare. Duis pellentesque ultrices convallis. Morbi ultricies consequat ligula posuere eleifend.",
        "version": 6.44
        },
        {
        "name": "Aygul Mutellip",
        "language": "Uyghur",
        "id": "FTSNV411G5MKLPDT",
        "bio": "Duis commodo orci ut dolor iaculis facilisis. Nam semper gravida nunc, sit amet elementum ipsum. Donec pellentesque ultrices mi, non consectetur eros luctus non. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
        "version": 9.1
        },
        {
        "name": "Awais Shaikh",
        "language": "Sindhi",
        "id": "OJMWMEEQWMLDU29P",
        "bio": "Nunc aliquet sodales nunc a pulvinar. Ut dictum, ligula eget sagittis maximus, tellus mi varius ex, a accumsan justo tellus vitae leo. Donec pellentesque ultrices mi, non consectetur eros luctus non. Nulla finibus massa at viverra facilisis. Nunc tincidunt laoreet laoreet.",
        "version": 1.59
        },
        {
        "name": "Ambreen Ahmed",
        "language": "Sindhi",
        "id": "5G646V7E6TJW8X2M",
        "bio": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
        "version": 2.35
        },
        {
        "name": "Celtia Anes",
        "language": "Galician",
        "id": "Z53AJY7WUYPLAWC9",
        "bio": "Nullam ac sodales dolor, eu facilisis dui. Maecenas non arcu nulla. Ut viverra quis eros eu tincidunt. Curabitur quis commodo quam.",
        "version": 8.34
        },
        {
        "name": "George Mifsud",
        "language": "Maltese",
        "id": "N1AS6UFULO6WGTLB",
        "bio": "Phasellus tincidunt sollicitudin posuere. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Donec congue sapien vel euismod interdum. Cras dictum dolor lacinia lectus vehicula rutrum. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula.",
        "version": 7.47
        },
        {
        "name": "Aytürk Qasim",
        "language": "Uyghur",
        "id": "70RODUVRD95CLOJL",
        "bio": "Curabitur ultricies id urna nec ultrices. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. Duis commodo orci ut dolor iaculis facilisis.",
        "version": 1.32
        },
        {
        "name": "Dialè Meso",
        "language": "Sesotho sa Leboa",
        "id": "VBLI24FKF7VV6BWE",
        "bio": "Maecenas non arcu nulla. Vivamus id faucibus velit, id posuere leo. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
        "version": 6.29
        },
        {
        "name": "Breixo Galáns",
        "language": "Galician",
        "id": "4VRLON0GPEZYFCVL",
        "bio": "Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero. Morbi ac tellus erat. In id elit malesuada, pulvinar mi eu, imperdiet nulla. Vestibulum pharetra libero et velit gravida euismod. Cras dictum dolor lacinia lectus vehicula rutrum.",
        "version": 1.62
        },
        {
        "name": "Bieito Lorme",
        "language": "Galician",
        "id": "5DRDI1QLRGLP29RC",
        "bio": "Ut viverra quis eros eu tincidunt. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Curabitur quis commodo quam. Morbi ac tellus erat.",
        "version": 4.45
        },
        {
        "name": "Azrugul Osman",
        "language": "Uyghur",
        "id": "5RCTVD3C5QGVAKTQ",
        "bio": "Maecenas tempus neque ut porttitor malesuada. Donec lobortis eleifend condimentum.",
        "version": 3.18
        },
        {
        "name": "Brais Verdiñas",
        "language": "Galician",
        "id": "BT407GHCC0IHXCD3",
        "bio": "Quisque maximus sodales mauris ut elementum. Ut viverra quis eros eu tincidunt. Sed eu libero maximus nunc lacinia lobortis et sit amet nisi. In id elit malesuada, pulvinar mi eu, imperdiet nulla. Curabitur quis commodo quam.",
        "version": 5.01
        },
        {
        "name": "Ekber Sadir",
        "language": "Uyghur",
        "id": "AGZDAP8D8OVRRLTY",
        "bio": "Quisque efficitur vel sapien ut imperdiet. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. In id elit malesuada, pulvinar mi eu, imperdiet nulla. Sed nec suscipit ligula. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero.",
        "version": 2.04
        },
        {
        "name": "Doreen Bartolo",
        "language": "Maltese",
        "id": "59QSX02O2XOZGRLH",
        "bio": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Nam semper gravida nunc, sit amet elementum ipsum. Ut viverra quis eros eu tincidunt. Curabitur sed condimentum felis, ut luctus eros.",
        "version": 9.31
        },
        {
        "name": "Ali Ayaz",
        "language": "Sindhi",
        "id": "3WNLUZ5LT2F7MYVU",
        "bio": "Cras dictum dolor lacinia lectus vehicula rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Etiam malesuada blandit erat, nec ultricies leo maximus sed.",
        "version": 7.8
        },
        {
        "name": "Guzelnur Polat",
        "language": "Uyghur",
        "id": "I6QQHAEGV4CYDXLP",
        "bio": "Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Nulla finibus massa at viverra facilisis.",
        "version": 8.56
        },
        {
        "name": "John Falzon",
        "language": "Maltese",
        "id": "U3AWXHDTSU0H82SL",
        "bio": "Sed nec suscipit ligula. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
        "version": 9.96
        },
        {
        "name": "Erkin Qadir",
        "language": "Uyghur",
        "id": "GV6TA1AATZYBJ3VR",
        "bio": "Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. .",
        "version": 3.53
        },
        {
        "name": "Anita Rajput",
        "language": "Sindhi",
        "id": "XLLVD0NO2ZFEP4AK",
        "bio": "Nam semper gravida nunc, sit amet elementum ipsum. Etiam congue dignissim volutpat.",
        "version": 5.16
        },
        {
        "name": "Ayesha Khalique",
        "language": "Sindhi",
        "id": "Q9A5QNGA0OSU8P6Y",
        "bio": "Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Etiam mauris magna, fermentum vitae aliquet eu, cursus vitae sapien.",
        "version": 3.9
        },
        {
        "name": "Pheladi Rammala",
        "language": "Sesotho sa Leboa",
        "id": "EELSIRT2T4Q0M3M4",
        "bio": "Quisque efficitur vel sapien ut imperdiet. Morbi ac tellus erat. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
        "version": 1.88
        },
        {
        "name": "Antón Caneiro",
        "language": "Galician",
        "id": "ENTAPNU3MMFUGM1W",
        "bio": "Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 4.84
        },
        {
        "name": "Qahar Abdulla",
        "language": "Uyghur",
        "id": "OGLODUPEHKEW0K83",
        "bio": "Duis commodo orci ut dolor iaculis facilisis. Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Fusce congue aliquam elit ut luctus. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero. Quisque maximus sodales mauris ut elementum.",
        "version": 3.65
        },
        {
        "name": "Reyhan Murat",
        "language": "Uyghur",
        "id": "Y91F4D54794E9ANT",
        "bio": "Suspendisse sit amet ullamcorper sem. Curabitur sed condimentum felis, ut luctus eros.",
        "version": 2.69
        },
        {
        "name": "Tatapi Phogole",
        "language": "Sesotho sa Leboa",
        "id": "7JA42P5CMCWDVPNR",
        "bio": "Duis luctus, lacus eu aliquet convallis, purus elit malesuada ex, vitae rutrum ipsum dui ut magna. Nullam ac sodales dolor, eu facilisis dui. Ut viverra quis eros eu tincidunt.",
        "version": 3.78
        },
        {
        "name": "Marcos Amboade",
        "language": "Galician",
        "id": "WPX7H97C7D70CZJR",
        "bio": "Nulla finibus massa at viverra facilisis. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Curabitur ultricies id urna nec ultrices. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros. Nunc aliquet sodales nunc a pulvinar.",
        "version": 7.37
        },
        {
        "name": "Grace Tabone",
        "language": "Maltese",
        "id": "K4XO8G8DMRNSHF2B",
        "bio": "Curabitur sed condimentum felis, ut luctus eros. Duis luctus, lacus eu aliquet convallis, purus elit malesuada ex, vitae rutrum ipsum dui ut magna.",
        "version": 5.36
        },
        {
        "name": "Shafqat Memon",
        "language": "Sindhi",
        "id": "D8VFLVRXBXMVBRVI",
        "bio": "Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. . Curabitur quis commodo quam. Quisque maximus sodales mauris ut elementum. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex.",
        "version": 8.95
        },
        {
        "name": "Zeynep Semet",
        "language": "Uyghur",
        "id": "Z324TZV8S0FGDSAO",
        "bio": "Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque. Nulla finibus massa at viverra facilisis.",
        "version": 1.03
        },
        {
        "name": "Meladi Papo",
        "language": "Sesotho sa Leboa",
        "id": "RJAZQ6BBLRT72CD9",
        "bio": "Quisque efficitur vel sapien ut imperdiet. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Etiam congue dignissim volutpat. Donec congue sapien vel euismod interdum.",
        "version": 7.22
        },
        {
        "name": "Semet Alim",
        "language": "Uyghur",
        "id": "HI7L2SR4RCS8C8CS",
        "bio": "Duis commodo orci ut dolor iaculis facilisis. Ut viverra quis eros eu tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "version": 1.01
        },
        {
        "name": "Sabela Veloso",
        "language": "Galician",
        "id": "QA55WXDLC7SRH97X",
        "bio": "Duis commodo orci ut dolor iaculis facilisis. Suspendisse potenti. Cras dictum dolor lacinia lectus vehicula rutrum.",
        "version": 7.32
        },
        {
        "name": "Madule Ledimo",
        "language": "Sesotho sa Leboa",
        "id": "IHJN2DGJB5O1Y00D",
        "bio": "Maecenas non arcu nulla. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id.",
        "version": 7.47
        },
        {
        "name": "Michelle Caruana",
        "language": "Maltese",
        "id": "EG1I21R75IV9Q0Q8",
        "bio": "Nam tristique feugiat est vitae mollis. Morbi ultricies consequat ligula posuere eleifend. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
        "version": 4.95
        },
        {
        "name": "Philip Camilleri",
        "language": "Maltese",
        "id": "FCO0URUHARX5FDFW",
        "bio": "Quisque efficitur vel sapien ut imperdiet. Suspendisse sit amet ullamcorper sem. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. . Aenean finibus in tortor vel aliquet.",
        "version": 9.97
        },
        {
        "name": "Olalla Romeu",
        "language": "Galician",
        "id": "WOCMVO6CYPG01ZHY",
        "bio": "Maecenas tempus neque ut porttitor malesuada. Sed nec suscipit ligula. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
        "version": 1.98
        },
        {
        "name": "Gulnur Perhat",
        "language": "Uyghur",
        "id": "VO3M22TTQMBA2XEM",
        "bio": "Nullam ac sodales dolor, eu facilisis dui. Etiam mauris magna, fermentum vitae aliquet eu, cursus vitae sapien. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Maecenas quis nisi nunc. Duis pellentesque ultrices convallis.",
        "version": 5.03
        },
        {
        "name": "Hunadi Makgatho",
        "language": "Sesotho sa Leboa",
        "id": "MRJDOV2MU7PTCDXE",
        "bio": "Phasellus tincidunt sollicitudin posuere. Maecenas quis nisi nunc. Duis luctus, lacus eu aliquet convallis, purus elit malesuada ex, vitae rutrum ipsum dui ut magna.",
        "version": 8.18
        },
        {
        "name": "Charmaine Abela",
        "language": "Maltese",
        "id": "F6FJP1QDJL944X4Z",
        "bio": "Nam rutrum sollicitudin ante tempus consequat. Suspendisse sit amet ullamcorper sem. Morbi ac tellus erat. Sed nec suscipit ligula.",
        "version": 6.95
        },
        {
        "name": "Tumelò Letamo",
        "language": "Sesotho sa Leboa",
        "id": "F8BL9NPIKV0OWO1X",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Etiam congue dignissim volutpat. Sed nec suscipit ligula. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
        "version": 7.17
        },
        {
        "name": "Aneela Mohan",
        "language": "Sindhi",
        "id": "CRYN52CXKNJU0YXU",
        "bio": "Sed nec suscipit ligula. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Maecenas tempus neque ut porttitor malesuada.",
        "version": 4.45
        },
        {
        "name": "Koketšo Montjane",
        "language": "Sesotho sa Leboa",
        "id": "0TTAMXC9TENQCA2O",
        "bio": "Curabitur sed condimentum felis, ut luctus eros. Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Etiam mauris magna, fermentum vitae aliquet eu, cursus vitae sapien. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
        "version": 3.61
        },
        {
        "name": "Tegra Núnez",
        "language": "Galician",
        "id": "NC1ZUV6B853BZZCW",
        "bio": "Maecenas tempus neque ut porttitor malesuada. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
        "version": 6.68
        },
        {
        "name": "Dilnur Qeyser",
        "language": "Uyghur",
        "id": "JVQ8RQ4YRPGLFMR8",
        "bio": "Maecenas non arcu nulla. Nulla finibus massa at viverra facilisis. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
        "version": 7.93
        },
        {
        "name": "Tania Agius",
        "language": "Maltese",
        "id": "WTDGKLDWJLR1BJKR",
        "bio": "Etiam congue dignissim volutpat. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
        "version": 4.78
        },
        {
        "name": "Iago Peirallo",
        "language": "Galician",
        "id": "D51G7XQTX2SPHR52",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Donec congue sapien vel euismod interdum. Suspendisse potenti. Quisque maximus sodales mauris ut elementum. Quisque maximus sodales mauris ut elementum.",
        "version": 6.3
        },
        {
        "name": "Mpho Lamola",
        "language": "Sesotho sa Leboa",
        "id": "UGL8EOTXYBW1ILLW",
        "bio": "In id elit malesuada, pulvinar mi eu, imperdiet nulla. Curabitur ultricies id urna nec ultrices. Maecenas tempus neque ut porttitor malesuada. In sed ultricies lorem. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
        "version": 2.05
        },
        {
        "name": "Josephine Balzan",
        "language": "Maltese",
        "id": "4OLTG6QD0A2VB432",
        "bio": "Maecenas tempus neque ut porttitor malesuada. Sed eu libero maximus nunc lacinia lobortis et sit amet nisi. Maecenas non arcu nulla. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Curabitur quis commodo quam.",
        "version": 7.64
        },
        {
        "name": "Thabò Motongwane",
        "language": "Sesotho sa Leboa",
        "id": "NROE4ZZVGKZGDFNO",
        "bio": "Donec pellentesque ultrices mi, non consectetur eros luctus non. Suspendisse potenti. Suspendisse potenti.",
        "version": 2.07
        },
        {
        "name": "Mmathabò Mojapelo",
        "language": "Sesotho sa Leboa",
        "id": "VXJDXYPV5L300IFW",
        "bio": "Sed laoreet posuere sapien, ut feugiat nibh gravida at. Duis luctus, lacus eu aliquet convallis, purus elit malesuada ex, vitae rutrum ipsum dui ut magna. Nunc tincidunt laoreet laoreet. .",
        "version": 9.36
        },
        {
        "name": "Kgabo Lerumo",
        "language": "Sesotho sa Leboa",
        "id": "D63WWKQE2R4TFDIL",
        "bio": "Vestibulum pharetra libero et velit gravida euismod. Maecenas tempus neque ut porttitor malesuada. Morbi ultricies consequat ligula posuere eleifend. Quisque efficitur vel sapien ut imperdiet. Nam rutrum sollicitudin ante tempus consequat.",
        "version": 6.69
        },
        {
        "name": "Lawrence Scicluna",
        "language": "Maltese",
        "id": "0KDA7XKZNNZWL2SR",
        "bio": "Donec pellentesque ultrices mi, non consectetur eros luctus non. In id elit malesuada, pulvinar mi eu, imperdiet nulla. Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et.",
        "version": 6.53
        },
        {
        "name": "Iria Xamardo",
        "language": "Galician",
        "id": "ULUDKBP9PHBGHX2J",
        "bio": "Vivamus id faucibus velit, id posuere leo. Sed eu libero maximus nunc lacinia lobortis et sit amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada blandit erat, nec ultricies leo maximus sed. Ut viverra quis eros eu tincidunt.",
        "version": 3.42
        },
        {
        "name": "Joseph Grech",
        "language": "Maltese",
        "id": "T4P1164RJBJ8S6XD",
        "bio": "Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. Donec lobortis eleifend condimentum.",
        "version": 7.68
        },
        {
        "name": "Napogadi Selepe",
        "language": "Sesotho sa Leboa",
        "id": "AJK91MKRFIHAQHHG",
        "bio": "Quisque maximus sodales mauris ut elementum. Maecenas quis nisi nunc.",
        "version": 4.95
        },
        {
        "name": "Lesetja Theko",
        "language": "Sesotho sa Leboa",
        "id": "AATM20BURO1DHDAE",
        "bio": "Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Etiam mauris magna, fermentum vitae aliquet eu, cursus vitae sapien. Nulla finibus massa at viverra facilisis. Morbi finibus dui sed est fringilla ornare.",
        "version": 6.81
        },
        {
        "name": "Martiño Arxíz",
        "language": "Galician",
        "id": "CQ56N9MH3WK7H5YQ",
        "bio": "Proin tempus eu risus nec mattis. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Nam rutrum sollicitudin ante tempus consequat. .",
        "version": 7.13
        },
        {
        "name": "Malehumò Ledwaba",
        "language": "Sesotho sa Leboa",
        "id": "E4F3HGRTKQKCT1SE",
        "bio": "Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Curabitur quis commodo quam. Quisque maximus sodales mauris ut elementum. Curabitur sed condimentum felis, ut luctus eros. Curabitur ultricies id urna nec ultrices.",
        "version": 6.52
        },
        {
        "name": "Musa Yasin",
        "language": "Uyghur",
        "id": "1AF8GIQZ1LF8QW0U",
        "bio": "Phasellus tincidunt sollicitudin posuere. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor.",
        "version": 1.54
        },
        {
        "name": "Lajwanti Kumari",
        "language": "Sindhi",
        "id": "INRW3R54RAY7J9IS",
        "bio": "In sed ultricies lorem. Sed eu libero maximus nunc lacinia lobortis et sit amet nisi. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "version": 9.34
        },
        {
        "name": "Maria Sammut",
        "language": "Maltese",
        "id": "BJRF0BWIHJ0Q12A1",
        "bio": "Maecenas tempus neque ut porttitor malesuada. Curabitur ultricies id urna nec ultrices.",
        "version": 6.83
        },
        {
        "name": "Rita Busuttil",
        "language": "Maltese",
        "id": "1QLMU6QZ7EYUNNZV",
        "bio": "Phasellus tincidunt sollicitudin posuere. Quisque efficitur vel sapien ut imperdiet. Vestibulum pharetra libero et velit gravida euismod. Maecenas tempus neque ut porttitor malesuada.",
        "version": 2.09
        },
        {
        "name": "Roi Fraguela",
        "language": "Galician",
        "id": "UAT0M2O42E9M4SFT",
        "bio": "Donec congue sapien vel euismod interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue aliquam elit ut luctus. Morbi ac tellus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "version": 1.08
        },
        {
        "name": "Matome Molamo",
        "language": "Sesotho sa Leboa",
        "id": "7HI0UZZLRB9N5CBI",
        "bio": "Vestibulum pharetra libero et velit gravida euismod. Fusce eu ultrices elit, vel posuere neque. Duis pellentesque ultrices convallis.",
        "version": 9.55
        },
        {
        "name": "Mapula Selokela",
        "language": "Sesotho sa Leboa",
        "id": "6ZQTOKQI6K82EE9Q",
        "bio": "Duis pellentesque ultrices convallis. Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Ut viverra quis eros eu tincidunt. Proin tempus eu risus nec mattis.",
        "version": 5.27
        },
        {
        "name": "Noa Ervello",
        "language": "Galician",
        "id": "W9FR842CI16V8NU3",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Suspendisse sit amet ullamcorper sem. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex.",
        "version": 9.33
        },
        {
        "name": "Naseem Kakepoto",
        "language": "Sindhi",
        "id": "6C7HZV4WPV9C9KS6",
        "bio": "Morbi ultricies consequat ligula posuere eleifend. Fusce congue aliquam elit ut luctus. . Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula.",
        "version": 1.4
        },
        {
        "name": "sayama Amir",
        "language": "Sindhi",
        "id": "7K4IJT1X7G0EK9WC",
        "bio": "Morbi ac tellus erat. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. Maecenas quis nisi nunc. Etiam congue dignissim volutpat. Sed nec suscipit ligula.",
        "version": 9.48
        },
        {
        "name": "Mariña Quintá",
        "language": "Galician",
        "id": "7GXC4OQYXX5JJY9F",
        "bio": "Phasellus tincidunt sollicitudin posuere. Morbi ac tellus erat. Nullam ac sodales dolor, eu facilisis dui.",
        "version": 8.81
        },
        {
        "name": "Memet Tursun",
        "language": "Uyghur",
        "id": "KSFMV2JK2D553083",
        "bio": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Morbi finibus dui sed est fringilla ornare. Suspendisse sit amet ullamcorper sem.",
        "version": 7.56
        },
        {
        "name": "Carmen Vella",
        "language": "Maltese",
        "id": "WUALBIMS4E8JS4L2",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet sodales nunc a pulvinar. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 4.55
        }
]
// Extracting usernames starts with Specific letter
const firstLetter = 'A'
const usernames = data.filter((details)=>{
    return details.name.startsWith(firstLetter);
})

// console.log(usernames)


// Extracting the first names of the users.

let lastNames = usernames.map((detail)=>{
    const fullname = detail['name'].split(' ');
    return fullname[1];
})
// console.log(firstNames);
 

// All the unique last names

let uniqueLastNames=[];
lastNames.forEach((lname)=>{
    if(!uniqueLastNames.includes(lname)){
        uniqueLastNames.push(lname);
    }
})

console.log(uniqueLastNames);