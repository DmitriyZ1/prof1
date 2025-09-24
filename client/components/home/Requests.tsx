import { useState, useEffect } from "react"
import { HOST } from "@/options"

import "./Requests.scss"

interface CardsDec {
    id: string,
    title: string,
    pic: string,
    descripLite: string
}

export default function Requests() {

    const [cards, setCards] = useState<CardsDec[]>([])

    useEffect(() => {   
        uploadData()
    }, [])

    async function uploadData(){
        const data = await fetch(`${HOST}/decide`)
        const result = await data.json()
        setCards(result)
    }

    return (
        <div className="requests">
            <div className="requests__content">
                <h2 className="requests__title">Ко мне можно обратиться с такими вопросами как:</h2>
                <ul className="requests__list">
                    {cards.map(item => (
                        <li className="requests__item" key={item.id}>
                            <div className="card">
                                <div className="card__pic">
                                    <img src={`${HOST}/pic-req/${item.pic}`} alt="pic" className="card__img" />
                                </div>
                                <div className="card__text">
                                    <h3 className="card__tittle">{item.title}</h3>
                                    {/* <div className="card__other">{item.descripLite}</div> */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}