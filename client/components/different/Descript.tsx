import "./Descript.scss"

export default function Descript({ list }: { list: string[] }) {

    return (
        <div className="descr">
            <h3 className="descr__title">Как клиенты описывают своё состояние (цитаты):</h3>
            <ol className="descr__list">

                {list.map((item, ind) => (
                    <li className="descr__item" key={ind}>{item} </li>
                ))}

            </ol>
        </div>

    )
}