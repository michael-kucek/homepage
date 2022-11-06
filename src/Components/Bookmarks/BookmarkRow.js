
export default function BookmarkRow({ url, name }) {
    return (
        <section>
            <div>
                <a href={url}>{name}</a> {'   '}
                <a href={url} target='_blank' rel="noreferrer">❏</a>
            </div>
        </section>
    )
}