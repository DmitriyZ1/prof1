import "./Video.scss"

export default function Video() {

    return (
        <div className="video">
            <div className="video__content">
                <div className="video__unavailable">Извинете видео пока не доступно</div>
                {/* <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/965a80366b53b7fc1f10855cd3b5f0f9"
                    allow="clipboard-write;"
                    allowFullScreen
                ></iframe> */}
            </div>
        </div>
    )
}