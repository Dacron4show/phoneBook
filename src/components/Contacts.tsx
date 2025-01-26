import { Card } from './ui/card';
import { Pencil } from 'lucide-react';
import { appStore } from '@/Store/AppStore';

function Contacts() {
	const { contacts } = appStore();
	return (
		<div>
			{contacts.map((contact, index) => (
				<Card
					className="shadow-lg"
					key={index}>
					<div className="flex items-center justify-between p-6">
						<div className="space-y-2">
							<h3 className="font-semibold text-lg">{contact.name}</h3>
							<p className="text-gray-600">{contact.tel}</p>
							<p className="text-gray-500 text-sm">{contact.email}</p>
						</div>
						<Pencil
							size={20}
							className="cursor-pointer"
						/>
					</div>
				</Card>
			))}
		</div>
	);
}

export default Contacts;
