interface ContaktsType {
    title1?: string,
    title2?: string,
    link:string
}

interface LinksType{
    tel: ContaktsType,
    vk: ContaktsType,
    telega: ContaktsType,
    whatsapp: ContaktsType,
    mail: ContaktsType,
    rubitime: ContaktsType
}


const HOST: string = "http://localhost:7676"
//const HOST: string = "http://87.236.23.166:4210"

const contacts: LinksType = {
    tel : {
        title1: '+7(967)098-48-98',
        title2: '+7 967 098-48-98',
        link: '+79670984898',
    },
    vk : {
        link: 'https://vk.com/dmitriy_z_ov'
    },
    telega : {
        link: 'https://t.me/Dmitriyzavoronkov'
    },
    whatsapp : {
        link: 'https://wa.me/79670984898'
    }, 
    mail: {
        title1: 'zavoronk@mail.ru',
        link: 'mailto:zavoronk@mail.ru'
    },
    rubitime: {
        link: 'https://atmocfera.rubitime.ru/'
    }
}

export {HOST, contacts}