import AffirmationCard from "@/components/AffirmationCard"

const getData = async () => {
    const res = await fetch("https://affirm-bc-api.web.app/affirmations")
    return res.json()
}
export default async function newAffirm() {
    const affirmations = await getData()
    return (
        <>
        <h1 className="text-2xl font-bold dark:text-sky-300 text-sky-600"> New Affirmations</h1>
        <section className="container mx-auto px-5 py-24 flex flex-wrap">
        {affirmations && affirmations.map(item => (
          <AffirmationCard key={item.id} item={item} />
          ))}
            </section>
        </>
    )
}