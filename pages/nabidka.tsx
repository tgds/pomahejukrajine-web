import type { NextPage, GetStaticProps } from 'next'
import { Meta } from '../components/Meta'
import Header from '../components/header'
import {RegisterForm} from "../components/RegisterForm";
import Footer from '../components/footer';

const Home: NextPage = ({ offerTypes, districts, languages }: any) => {
	return (
		<div className="antialiased text-gray-600">
			<Meta title="Pomáhej Ukrajině" description="Neziskové organizace pracující s migranty v ČR se spojily a toto je centrální místo, kde můžete nabídnout svou pomoc. Některé nabídky budou přímo zveřejněny a mohou na ně reagovat ti, kdo pomoc potřebují. Ostatní nabídky budou zpracovány kolegy z místních neziskových organizací nebo obcí." />
			<Header />
			<div className="bg-white py-4 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-8">
				<div className="relative max-w-xl mx-auto">
					<main className="mt-2">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Pomozte Ukrajincům</h2>
							<p className="mt-4 text-lg leading-6 text-gray-500">
								Nabídněte svou pomoc
							</p>
						</div>
						<div className={`mt-12 ${process.env.NEXT_TEMPORARY == 'TEMPORARY' ? 'hidden' : ''}`}>
							<RegisterForm offerTypes={offerTypes} districts={districts} languages={languages} />
						</div>
					</main>
				</div>
			</div>
			<Footer />
		</div>
	)
}


export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_CONTEMBER_CONTENT_URL!,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CONTEMBER_PUBLIC_TOKEN}`,
			},
			body: JSON.stringify({
				query: `{
					offerTypes: listOfferType(orderBy: [{ order: asc }]) {
						id
						name
						infoText

						questions {
							id
							question
							type
							required
							options {
								id
								value
								label
								requireSpecification
							}
						}
					}

					languages: listLanguage(orderBy: [{ order: asc }]) {
						id
						name
					}

					districts: listDistrict(orderBy: [{name: asc}]) {
						id
						name
					}
				}`
			}),
		},
	)

	const json = await response.json()
	const { data } = json

	return {
		props: { ...data },
	}
}

export default Home
